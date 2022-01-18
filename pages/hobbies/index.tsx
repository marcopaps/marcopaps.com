import ContentfulApi from "@/contentfulApi";
import Card from "@/components/Card";
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
    <div>
      <h1 className="text-3xl font-bold text-center m-12">Hobbies page</h1>
      <div className="m-12">
        {hobbies?.map((hobby) => (
          <Card
            title={hobby.fields.title}
            description={hobby.fields.description}
            to={`/hobbies/${hobby.fields.slug}`}
            image={hobby.fields.thumbnailDesktop}
            key={hobby.sys.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
