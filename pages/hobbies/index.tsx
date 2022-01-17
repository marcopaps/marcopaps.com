import type { NextPage } from "next";
import type { IHobby } from "../../@types/generated/contentful";
import ContentfulApi from "../../contentfulApi";

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
  return (
    <>
      <h1>Hobbies page</h1>
      {hobbies?.map((hobby) => (
        <p key={hobby.sys.id}>{hobby.fields.title}</p>
      ))}
    </>
  );
};

export default Home;
