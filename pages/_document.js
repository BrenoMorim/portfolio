import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en-us'>
      <Head>
        <link rel='icon' href="https://raw.githubusercontent.com/BrenoMorim/portfolio/main/public/Logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}