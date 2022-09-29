import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";
import { GlobalStyle } from "components";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
