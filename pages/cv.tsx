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
} from "@/types/generated/contentful";

interface IProps {
  jobExperiences: IJobExperience[];
  skills: ISkill[];
  hobbies: IHobby[];
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
];

export async function getStaticProps() {
  const [jobExperiences, skills, hobbies] = await Promise.all(
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
    },
    revalidate: 1,
  };
}

const Resume: NextPage<IProps> = (props) => {
  return (
    <div>
      <CVHeader className="sticky inset-0 z-10" />
      <div className="grid grid-cols-3 px-6 lg:px-48 my-8">
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
        <div className="border-l-2 p-4">
          {<CVPersonalDetails skills={props.skills} hobbies={props.hobbies} />}
        </div>
      </div>
    </div>
  );
};

export default Resume;
