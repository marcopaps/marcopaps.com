import { ParsedUrlQuery } from "querystring";
import { Client } from "@/contentfulApi";
import { ContentTypes } from "@/types/contentTypesEnum";

import type { NextPage, GetStaticPropsContext } from "next";
import type { EntryCollection } from "contentful";
import type { IHobby, IHobbyFields } from "@/types/generated/contentful";

interface PropsType {
  hobby: IHobby;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const result: EntryCollection<IHobbyFields> = await Client.getEntries({
    content_type: ContentTypes.HOBBY,
  });

  const paths = result.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug } = context.params as IParams;

  const entries = await Client.getEntries({
    content_type: ContentTypes.HOBBY,
    "fields.slug": slug,
  });

  if (!entries.total) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  const [hobby] = entries.items;

  return {
    props: { hobby },
    revalidate: 1,
  };
};

const Hobby: NextPage<PropsType> = ({ hobby }: PropsType) => {
  if (!hobby) {
    return <>{"Loading..."}</>;
  }

  return (
    <>
      <h1>{hobby.fields.title}</h1>
      <p>{hobby.fields.description}</p>
    </>
  );
};

export default Hobby;
