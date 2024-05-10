import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { IJobExperience } from '@/types/generated/contentful';

interface IProps {
  jobExperiences: IJobExperience[];
  className?: string;
}

dayjs.extend(duration);

const getJobTenureship = (startDate: string, endDate?: string) => {
  const end = dayjs(endDate);
  const start = dayjs(startDate);
  const durationDiff = dayjs.duration(end.diff(start));

  const yearsTenureship = durationDiff.get('years');
  const monthsTenureship = durationDiff.get('months');

  const startDateString = dayjs(startDate).format('MMMM YYYY');
  const endDateString = endDate
    ? dayjs(endDate).format('MMMM YYYY')
    : 'Present';

  const tenureshipString = `${yearsTenureship}${
    yearsTenureship > 1 ? 'yrs' : 'yr'
  } ${monthsTenureship}${monthsTenureship > 1 ? 'mos' : 'mo'}`;

  return {
    startDateString,
    endDateString,
    tenureshipString,
  };
};

const JobExperiences = (props: IProps) => {
  return (
    <div className={props.className}>
      {props.jobExperiences.length > 0 &&
        props.jobExperiences.map((item) => {
          const { startDateString, endDateString, tenureshipString } =
            getJobTenureship(item.fields.startDate, item.fields.endDate);

          return (
            <div className="text-gray-800" key={item.sys.id}>
              {/* Job header section */}

              <div className="block items-center font-bold md:block lg:flex">
                <div className="text-lg text-purple-900">
                  {item.fields.role}
                </div>
                <div className="lg:ml-4">{item.fields.company}</div>
              </div>

              {/* Tenureship section */}

              <div className="block items-center text-gray-500 md:flex">{`${startDateString} - ${endDateString}`}</div>

              {/* Responsibiliies section */}

              <div className="text-md md:text-lg">
                {documentToReactComponents(item.fields.description)}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JobExperiences;
