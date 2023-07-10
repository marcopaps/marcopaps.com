import { client, entries } from '@/utils/contentful';
import type { ISocialLink } from '@/types/generated/contentful';
import Layout from '@/components/layout';
import { Footer } from '@/components/common';

interface IProps {
  socialLinks: ISocialLink[];
}

export async function getStaticProps() {
  const socialLinks = await client.getEntries({
    content_type: 'socialLink',
    order: '-fields.order',
  });

  return {
    props: {
      socialLinks: socialLinks.items,
    },
  };
}

const Home = (props: IProps) => {
  return (
    <Layout>
      <main className="bg-gradient-to-b from-gray-50 via-white to-gray-400 min-h-screen p-8 selection:text-white selection:bg-purple-600">
        <p className="flex gap-4 flex-col">
          <span className="font-bold text-6xl">Marco</span>
          <span className="font-bold text-8xl text-purple-800">Budiongan</span>
        </p>

        {/* Links */}
        <div className="mt-8 flex flex-col gap-4 text-gray-800 font-light">
          <p>
            <a
              href="mailto:hello@marcopaps.com"
              className="text-2xl hover:underline hover:text-purple-800"
            >
              hello@marcopaps.com
            </a>
          </p>
          <p>
            <a
              href="tel:+639612048584"
              className="text-2xl hover:underline hover:text-purple-800"
            >
              +63 961 204 8584
            </a>
          </p>
          {props.socialLinks.map((socialLink) => (
            <p key={socialLink.sys.id}>
              <a
                href={socialLink.fields.url}
                className="text-2xl hover:underline hover:text-purple-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                {socialLink.fields.label}
              </a>
            </p>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
