import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  /* 
    This logic is required to make styled components work nicely with nextjs's ssr features

    For the reference implementation, see https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx
  */
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({ enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />) });

      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps, styles: [initialProps.styles, sheet.getStyleElement()] };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const title = "UMA - Universal Market Access";
    const description = "An optimistic oracle built for web3";
    const image = "/uma_square_red_logo.png";
    return (
      <Html>
        <Head>
          <meta name="description" content={description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@UMAprotocol" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={image} />

          <meta property="og:title" content={title} />
          <meta property="og:image" content={image} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content="https://umaproject.org" />

          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#FF4A4A" />
          <link
            rel="preload"
            href="/fonts/HalyardDisplayLight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/HalyardDisplay-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/HalyardDisplaySemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/HalyardDisplay-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="/fonts/HalyardDisplayLight.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link
            rel="preload"
            href="/fonts/HalyardDisplay-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/HalyardDisplaySemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link rel="preload" href="/fonts/HalyardDisplay-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
