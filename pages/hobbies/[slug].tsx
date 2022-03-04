import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { Client } from '@/utils/contentfulApi';
import { ContentTypes } from '@/types/contentTypesEnum';

import type { NextPage, GetStaticPropsContext } from 'next';
import type { EntryCollection } from 'contentful';
import type { IHobby, IHobbyFields } from '@/types/generated/contentful';

interface IProps {
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
    'fields.slug': slug,
  });

  if (!entries.total) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }

  const [hobby] = entries.items;

  return {
    props: { hobby },
    revalidate: 1,
  };
};

const Hobby: NextPage<IProps> = ({ hobby }: IProps) => {
  if (!hobby) {
    return <>{'Loading...'}</>;
  }

  return (
    <div className="flex justify-center pt-52">
      <div className="text-center">
        <h1>{'Page is still under contruction...'}</h1>
        <div className="pt-8 text-purple-900 hover:underline">
          <Link href="/">{'Back to home page'}</Link>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
