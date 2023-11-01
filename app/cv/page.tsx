import Head from 'next/head';
import { memo } from 'react';
import { client, entries } from '@/utils/contentful';
import { Footer } from '@/components/common';
import {
  CVHeader,
  CVSection,
  CVJobExperiences,
  CVPersonalDetails,
} from '@/components/cv';

import type { NextPage } from 'next';
import type {
  IHobby,
  IJobExperience,
  ISkill,
  ISocialLink,
} from '@/types/generated/contentful';
import Layout from '@/components/layout';

interface IProps {
  jobExperiences: IJobExperience[];
  skills: ISkill[];
  hobbies: IHobby[];
  socialLinks: ISocialLink[];
}

export async function getStaticProps() {
  const [jobExperiences, skills, hobbies, socialLinks] = await Promise.all(
    entries.map((query) =>
      client.getEntries({
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
    <Layout title="Marco Budiongan - CV">
      <CVHeader className="sticky inset-0 z-20" />

      <div className="grid grid-cols-1 px-6 md:my-8 md:grid-cols-3 lg:px-24 xl:px-48">
        {/* Job experiences and profile intro section */}

        <div className="mt-8 md:col-span-2 md:m-4">
          <CVSection title="Profile">
            <div className="items-center block text-gray-800 font-lg text-md md:text-lg">
              {
                'Results-driven Full Stack JavaScript Developer with a proven track record of successfully delivering projects in diverse corporate and startup environments. Experienced in leveraging agile frameworks to drive efficient and effective development processes.'
              }
            </div>
          </CVSection>
          <CVSection title="Employment" hr>
            <CVJobExperiences jobExperiences={props.jobExperiences} />
          </CVSection>
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
    </Layout>
  );
};

export default memo(Resume);
