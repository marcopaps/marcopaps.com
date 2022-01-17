import type { NextPage } from "next";
import type { IHobby } from "../@types/generated/contentful";
import ContentfulApi from "../contentfulApi";

const ContentfulClient = ContentfulApi.getClient();

type PropsType = {
  hobbies: IHobby[];
};

export async function getStaticProps() {
  const entries = await ContentfulClient.getEntries({
    content_type: "hobby",
  });

  return {
    props: { hobbies: entries.items },
    revalidate: 1,
  };
}

const Home: NextPage<PropsType> = ({ hobbies }) => {
  return <h1>{"Home page"}</h1>;
};

export default Home;
