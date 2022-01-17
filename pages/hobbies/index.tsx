import NextLink from "next/link";
import ContentfulApi from "@/contentfulApi";
import Thumbnail from "@/components/Thumbnail";
import { ContentTypes } from "@/types/contentTypesEnum";

import type { NextPage } from "next";
import type { IHobby } from "@/types/generated/contentful";

const ContentfulClient = ContentfulApi.getClient();

type PropsType = {
  hobbies: IHobby[];
};

export async function getStaticProps() {
  const entries = await ContentfulClient.getEntries({
    content_type: ContentTypes.HOBBY,
  });

  return {
    props: { hobbies: entries.items },
    revalidate: 1,
  };
}

const Home: NextPage<PropsType> = ({ hobbies }) => {
  return (
    <>
      <h1>Hobbies page</h1>
      {hobbies?.map((hobby) => (
        <NextLink
          href={`/hobbies/${hobby.fields.slug}` || "/"}
          key={hobby.sys.id}
        >
          <a>
            {hobby.fields.title}
            <Thumbnail image={hobby.fields.thumbnailDesktop} />
          </a>
        </NextLink>
      ))}
    </>
  );
};

export default Home;
