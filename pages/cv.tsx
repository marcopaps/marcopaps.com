import { Client } from "@/utils/contentfulApi";
import { ContentTypes } from "@/types/contentTypesEnum";
import {
  CVHeader,
  CVSection,
  CVJobExperiences,
  CVPersonalDetails,
} from "@/components";

import type { NextPage } from "next";
import type {
  IHobby,
  IJobExperience,
  ISkill,
  ISocialLink,
} from "@/types/generated/contentful";

interface IProps {
  jobExperiences: IJobExperience[];
  skills: ISkill[];
  hobbies: IHobby[];
  socialLinks: ISocialLink[];
}

const contentfulEntries = [
  {
    content_type: ContentTypes.JOB_EXPERIENCE,
    order: "-fields.order",
  },
  {
    content_type: ContentTypes.SKILL,
    order: "-fields.rating",
  },
  {
    content_type: ContentTypes.HOBBY,
    order: "-fields.title",
  },
  {
    content_type: ContentTypes.SOCIAL_LINK,
    order: "-fields.order",
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
      {/* Header */}

      <CVHeader className="sticky inset-0 z-10" />

      {/* Job experiences and profile intro section */}

      <div className="grid grid-cols-1 md:grid-cols-3 px-6 lg:px-48 my-8">
        <div className="col-span-2 m-8">
          <CVSection title="Profile">
            <div className="font-lg block md:flex items-center py-4">
              {
                "Dedicated and motivated IT graduate seeking advanced level manager position"
              }
            </div>
          </CVSection>
          <CVJobExperiences
            className="my-8"
            jobExperiences={props.jobExperiences}
          />
        </div>

        {/* Personal details */}

        <div className="md:border-l-2 p-4">
          {
            <CVPersonalDetails
              skills={props.skills}
              hobbies={props.hobbies}
              socialLinks={props.socialLinks}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Resume;
