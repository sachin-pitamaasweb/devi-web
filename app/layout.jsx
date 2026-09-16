import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegacyScripts from "../components/LegacyScripts";
import Preloader from "../components/Preloader";

export const metadata = {
  title: "Fesho | Organic Store PHP Template | Home Page 01",
  description: "Organic Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/settings.css" rel="stylesheet" type="text/css" />
        <link href="/css/layers.css" rel="stylesheet" type="text/css" />
        <link href="/css/navigation.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      </head>
      <body>
        {/* jQuery is safe to load early: it does not mutate page markup. */}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Preloader />
        <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
        </div>
        <LegacyScripts />
      </body>
    </html>
  );
}
