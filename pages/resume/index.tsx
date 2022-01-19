import { useCallback } from "react";
import { Client } from "@/contentfulApi";
import { ContentTypes } from "@/types/contentTypesEnum";

import type { NextPage } from "next";
import type { IJobExperience } from "@/types/generated/contentful";

interface PropsType {
  jobExperiences: IJobExperience[];
}

export async function getStaticProps() {
  const jobExperiences = await Client.getEntries({
    content_type: ContentTypes.JOB_EXPERIENCE,
  });

  return {
    props: { jobExperiences: jobExperiences.items },
    revalidate: 1,
  };
}

const Resume: NextPage<PropsType> = ({ jobExperiences }) => {
  const renderJobExperiences = useCallback(() => {
    return jobExperiences.map((item) => {
      return <p key={item.sys.id}>{item.fields.company}</p>;
    });
  }, [jobExperiences]);

  return <div>{renderJobExperiences()}</div>;
};

export default Resume;
