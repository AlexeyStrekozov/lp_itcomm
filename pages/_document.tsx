import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import i18nextConfig from "../next-i18next.config";

class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    const currentLocale = Array.isArray(this.props.__NEXT_DATA__.query.locale)
      ? this.props.__NEXT_DATA__.query.locale[0]
      : this.props.__NEXT_DATA__.query.locale ||
        i18nextConfig.i18n.defaultLocale;

    // const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Arsenal:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={"overflow-x-hidden "}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
