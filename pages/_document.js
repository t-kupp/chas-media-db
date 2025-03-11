import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='w-screen overflow-x-hidden' lang='en'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
