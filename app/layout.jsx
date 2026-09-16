import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LegacyScripts from "../components/LegacyScripts";
import Preloader from "../components/Preloader";

export const metadata = {
  title: "DCS | Devi Chand & Sons",
  description:
    "Devi Chand & Sons is a trusted Indian food company offering quality basmati rice, long grain rice, rice bran oil, and food products for domestic and international markets.",
  openGraph: {
    title: "DCS | Devi Chand & Sons",
    description:
      "Quality Indian rice and food products from Devi Chand & Sons, serving domestic and international markets.",
    siteName: "Devi Chand & Sons",
  },
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
