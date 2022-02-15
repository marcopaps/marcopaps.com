import Head from 'next/head';
import { Client } from '@/utils/contentfulApi';
import { ContentTypes } from '@/types/contentTypesEnum';
import {
  CVHeader,
  CVSection,
  CVJobExperiences,
  CVPersonalDetails,
  Footer,
} from '@/components';

import type { NextPage } from 'next';
import type {
  IHobby,
  IJobExperience,
  ISkill,
  ISocialLink,
} from '@/types/generated/contentful';

interface IProps {
  jobExperiences: IJobExperience[];
  skills: ISkill[];
  hobbies: IHobby[];
  socialLinks: ISocialLink[];
}

const contentfulEntries = [
  {
    content_type: ContentTypes.JOB_EXPERIENCE,
    order: '-fields.order',
  },
  {
    content_type: ContentTypes.SKILL,
    order: '-fields.rating',
  },
  {
    content_type: ContentTypes.HOBBY,
    order: '-fields.title',
  },
  {
    content_type: ContentTypes.SOCIAL_LINK,
    order: '-fields.order',
  },
];

export async function getStaticProps() {
  const [jobExperiences, skills, hobbies, socialLinks] = await Promise.all(
    contentfulEntries.map((query) =>
      Client.getEntries({
        content_type: query.content_type,
        order: query.order,
      })
    )
  );

  return {
    props: {
      jobExperiences: jobExperiences.items,
      skills: skills.items,
      hobbies: hobbies.items,
      socialLinks: socialLinks.items,
    },
    revalidate: 1,
  };
}

const Resume: NextPage<IProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Marco Budiongan - CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Marco Budiongan - CV"></meta>
      </Head>
      {/* Header */}
      <CVHeader className="sticky inset-0 z-10" />

      <div className="grid grid-cols-1 px-6 md:my-8 md:grid-cols-3 xl:px-48">
        {/* Job experiences and profile intro section */}

        <div className="mt-8 md:col-span-2 md:m-4">
          <CVSection title="Profile">
            <div className="font-lg block items-center py-4">
              {
                'I am a full stack JS developer experienced in leveraging agile frameworks. Has experience working  in various projects for both corporate and start-up companies.'
              }
            </div>
          </CVSection>
          <CVJobExperiences
            className="my-8"
            jobExperiences={props.jobExperiences}
          />
        </div>

        {/* Personal details */}

        <div className="md:border-l-2 md:p-4">
          {
            <CVPersonalDetails
              skills={props.skills}
              hobbies={props.hobbies}
              socialLinks={props.socialLinks}
            />
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
