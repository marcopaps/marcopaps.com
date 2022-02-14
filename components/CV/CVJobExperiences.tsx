import dayjs from 'dayjs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import type { IJobExperience } from '@/types/generated/contentful';
import { CVSection } from '..';

interface IProps {
  jobExperiences: IJobExperience[];
  className?: string;
}

const JobExperiences = (props: IProps) => {
  return (
    <div className={props.className}>
      <hr />
      <CVSection title="Employment">
        {props.jobExperiences.length > 0 &&
          props.jobExperiences.map((item) => {
            const startDate = dayjs(item.fields.startDate).format('MMMM YYYY');
            const endDate = item.fields.endDate
              ? dayjs(item.fields.endDate).format('MMMM YYYY')
              : 'Present';

            return (
              <div className="pt-8 text-gray-800" key={item.sys.id}>
                {/* Job header section */}

                <div className="my-2 block items-center font-bold md:block lg:flex">
                  <div className="text-lg text-purple-900">
                    {item.fields.role}
                  </div>
                  <div className="lg:ml-4">{item.fields.company}</div>
                </div>

                {/* Tenureship section */}

                <div className="block items-center text-gray-400 md:flex">{`${startDate} - ${endDate}  (${item.fields.tenureship})`}</div>

                {/* Responsibiliies section */}

                <div className="text-md md:text-lg">
                  {documentToReactComponents(item.fields.description)}
                </div>
              </div>
            );
          })}
      </CVSection>
    </div>
  );
};

export default JobExperiences;
