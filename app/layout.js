import './globals.css';

export const metadata = {
  title: 'Birendra Gurung — Web Developer',
  description:
    'Birendra Gurung — full-stack web developer. Laravel, Node, Python, React, Vue. 8+ years building reliable web products.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="light" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');document.body.classList.remove('light');}}catch(e){}})();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
