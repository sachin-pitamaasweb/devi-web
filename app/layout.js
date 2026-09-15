import "./globals.css";
import Script from "next/script";

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
        {children}
                <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.themepunch.tools.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.themepunch.revolution.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.actions.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.kenburn.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.layeranimation.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.migration.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.navigation.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.parallax.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.slideanims.min.js" strategy="lazyOnload" />
        <Script src="/js/revolution.extension.video.min.js" strategy="lazyOnload" />
        <Script src="/js/main-slider-script.js" strategy="lazyOnload" />
        <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
        <Script src="/js/jquery.countdown.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/appear.js" strategy="lazyOnload" />
        <Script src="/js/mixitup.js" strategy="lazyOnload" />
        <Script src="/js/bxslider.js" strategy="lazyOnload" />
        <Script src="/js/swiper.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.js" strategy="lazyOnload" />
        <Script src="/js/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
