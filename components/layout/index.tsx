import Head from 'next/head';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'Marco Budiongan' }: IProps) => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Marco Budiongan"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
