 import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
 import { extractCritical } from "@emotion/server";

 export default class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext): Promise<any> {
     const initialProps = await Document.getInitialProps(ctx);
     const page = await ctx.renderPage();
     const styles = extractCritical(page.html);
     return { ...initialProps, ...page, ...styles };
   }

   render() {
     return (
       <Html lang="en">
         <Head>
         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2272900763374613"
          crossOrigin="anonymous"></script>
         <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            name="description"
            content="AnVel"
          />
          <meta
            name="title"
            content="AnVel"
          />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }
