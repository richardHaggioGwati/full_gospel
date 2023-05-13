import '../css/globals.css';
import { Suspense } from 'react';
import { Loader, Navbar } from '../components';
import { Footer } from '../container/Home';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Full Gospel Church</title>
        <meta name="description" content="The Full Gospel Ministries website" />
        <meta
          name="keywords"
          content="The Full Gospel Church, Gospel, Church Johannesburg South, Worship, Rooted Band "
        />
        <meta name="author" content="Richard Gwati" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body>
        <Suspense fallback={<Loader />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
