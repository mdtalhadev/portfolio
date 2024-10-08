import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta name="description" content="My portfolio website" />
        {/* <title>Md Talha</title> */}
        <link rel="icon" href="/images/profile.jpg" />
      </Head>
      <body className="antialiased" style={{scrollbarWidth: "none", backgroundColor:"#f3f2ee"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
