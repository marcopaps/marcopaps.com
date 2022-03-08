import Head from 'next/head';
import { addSiteVisitCount } from '@/utils/addSiteVisitCount';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Client } from '@/utils/contentfulApi';
import { ContentTypes } from '@/types/contentTypesEnum';
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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url: string) => {
      if (process.env.NODE_ENV === 'production') {
        addSiteVisitCount();
      }
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      {loading || !props ? (
        <div className="w-full py-48 text-center text-gray-800">
          {'Loading...'}
        </div>
      ) : (
        <div>
          <Head>
            <title>Marco Budiongan</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="Marco Budiongan"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
          </Head>

          {/* Header */}

          <CVHeader className="sticky inset-0 z-10" />

          <div className="grid grid-cols-1 px-6 md:my-8 md:grid-cols-3 lg:px-24 xl:px-48">
            {/* Job experiences and profile intro section */}

            <div className="mt-8 md:col-span-2 md:m-4">
              <CVSection title="Profile">
                <div className="font-lg text-md block items-center py-4 text-gray-800 md:text-lg">
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
      )}
    </>
  );
};

export default Resume;
