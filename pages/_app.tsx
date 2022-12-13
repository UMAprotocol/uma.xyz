import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "components";
import { HeaderProvider } from "contexts";
import type { AppProps } from "next/app";
import "styles/fonts.css";
import "styles/sandpack-override.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <HeaderProvider>
        <Component {...pageProps} />
      </HeaderProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
