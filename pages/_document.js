import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Lazare+Grotesk:wght@300;400;600;700&display=swap" 
          as="style" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=Lazare+Grotesk:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
