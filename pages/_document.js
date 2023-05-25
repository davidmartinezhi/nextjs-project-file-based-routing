/*
_app.js is the root component. application cell inside body section of html document


_document.js allows you to customize the entire html document

*/

import { defaultConfig } from "next/dist/server/config-shared";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* This lets us add html components outside our application component and use react portals */}
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
