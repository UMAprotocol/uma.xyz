import { GlobalStyle } from "components/GlobalStyle";
import { HeaderProvider } from "contexts";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/fonts.css";
import "styles/sandpack-override.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderProvider>
      <Head>
        <title>UMA - Universal Market Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </HeaderProvider>
  );
}

export default MyApp;
