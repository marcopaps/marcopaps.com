import type { AppProps } from "next/app";
import { Container } from "@/layouts/Container";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
