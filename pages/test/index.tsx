import { useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Client } from "@/utils/contentfulApi";
import { PageContainer } from "@/layouts/PageContainer";
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
      return (
        <div className="my-12" key={item.sys.id}>
          <div className="font-bold">{item.fields.company}</div>
          <div>{documentToReactComponents(item.fields.description)}</div>
        </div>
      );
    });
  }, [jobExperiences]);

  return <PageContainer>{renderJobExperiences()}</PageContainer>;
};

export default Resume;
