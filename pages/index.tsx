import { client, entries } from '@/utils/contentful';
import type { ISocialLink } from '@/types/generated/contentful';
import Layout from '@/components/layout';

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
    revalidate: 1,
  };
}

const Home = (props: IProps) => {
  return (
    <Layout>
      <div className="min-h-screen p-8 sm:px-4 lg:p-8 bg-gradient-to-b from-gray-50 via-white to-gray-400 selection:text-white selection:bg-purple-600">
        <p className="flex flex-col gap-2">
          <span className="text-2xl font-bold lg:text-6xl md:text-5xl">
            Marco
          </span>
          <span className="text-4xl font-bold text-purple-800 lg:text-8xl md:text-7xl">
            Budiongan
          </span>
        </p>

        {/* Links */}
        <div className="flex flex-col gap-4 mt-6 font-light text-gray-800 lg:text-2xl md:text-lg">
          <p>
            <a
              href="mailto:hello@marcopaps.com"
              className="hover:underline hover:text-purple-800"
            >
              hello@marcopaps.com
            </a>
          </p>
          <p>
            <a
              href="tel:+639612048584"
              className="hover:underline hover:text-purple-800"
            >
              +639 992 674 6377
            </a>
          </p>
          {props.socialLinks.map((socialLink) => (
            <p key={socialLink.sys.id}>
              <a
                href={socialLink.fields.url}
                className="hover:underline hover:text-purple-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                {socialLink.fields.label}
              </a>
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
