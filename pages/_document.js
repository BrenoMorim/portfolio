import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en-us'>
      <Head>
        <link rel='icon' href="https://raw.githubusercontent.com/BrenoMorim/portfolio/main/public/Logo.png" />
        <meta name="description" content="My custom portfolio, containing my contact information, technologies I work with and also my projects"/>
        <title>Breno Morim's Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}