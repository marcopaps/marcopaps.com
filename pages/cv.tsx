import { Client } from "@/utils/contentfulApi";
import { ContentTypes } from "@/types/contentTypesEnum";
import JobExperiences from "@/components/JobExperiences";
import PersonalDetails from "@/components/PersonalDetails";

import type { NextPage } from "next";
import type { IJobExperience } from "@/types/generated/contentful";
import { CVSection } from "@/components";

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
      <PersonalDetails className="sticky inset-0" />
      <div className="grid grid-cols-3 px-6 lg:px-48 my-8">
        <div className="col-span-2 m-8">
          <CVSection title="Profile">
            <div className="font-lg block md:flex items-center py-4">
              {
                "Dedicated and motivated engineering graduate seeking entry level assistant quality control manager position"
              }
            </div>
          </CVSection>
          <JobExperiences
            className="my-8"
            jobExperiences={props.jobExperiences}
          />
        </div>
        <div className="border-l-2"></div>
      </div>
    </div>
  );
};

export default Resume;
