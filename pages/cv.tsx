import { Client } from "@/utils/contentfulApi";
import { ContentTypes } from "@/types/contentTypesEnum";
import {
  CVHeader,
  CVSection,
  CVJobExperiences,
  CVPersonalDetails,
} from "@/components";

import type { NextPage } from "next";
import type { IJobExperience } from "@/types/generated/contentful";

interface PropsType {
  jobExperiences: IJobExperience[];
}

export async function getStaticProps() {
  const jobExperiences = await Client.getEntries({
    content_type: ContentTypes.JOB_EXPERIENCE,
    order: "-fields.order",
  });

  return {
    props: { jobExperiences: jobExperiences.items },
    revalidate: 1,
  };
}

const Resume: NextPage<PropsType> = (props) => {
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
          <CVPersonalDetails />
        </div>
      </div>
    </div>
  );
};

export default Resume;
