import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "components";
import { HeaderProvider } from "contexts";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/fonts.css";
import "styles/sandpack-override.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <HeaderProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </HeaderProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
