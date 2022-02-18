import Head from 'next/head';

interface IProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="relative mx-48 h-full rounded-lg">
      <Head>
        <title>Marco Budiongan</title>
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
