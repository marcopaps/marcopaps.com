import Card from '@/components/common/Card';
import { Client } from '@/utils/contentfulApi';
import { ContentTypes } from '@/types/contentTypesEnum';

import type { NextPage } from 'next';
import type { IHobby } from '@/types/generated/contentful';

type IProps = {
  hobbies: IHobby[];
};

export async function getStaticProps() {
  const entries = await Client.getEntries({
    content_type: ContentTypes.HOBBY,
  });

  return {
    props: { hobbies: entries.items },
    revalidate: 1,
  };
}

const Home: NextPage<IProps> = ({ hobbies }) => {
  return (
    <div>
      <h1 className="m-12 text-center text-3xl font-bold">Hobbies page</h1>
      <div className="m-12">
        {hobbies?.map((hobby) => (
          <div className="my-16" key={hobby.sys.id}>
            <Card
              title={hobby.fields.title}
              description={hobby.fields.description}
              to={`/hobbies/${hobby.fields.slug}`}
              image={hobby.fields.thumbnailDesktop}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
