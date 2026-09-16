"use client";

import { useEffect } from "react";

// The template's jQuery plugins rewrite their target markup.  Loading them from
// a client effect guarantees React has hydrated the server-rendered DOM first.
const sliderCore = [
  "/js/jquery.themepunch.tools.min.js",
  "/js/jquery.themepunch.revolution.min.js",
];

const sliderExtensions = [
  "/js/revolution.extension.actions.min.js",
  "/js/revolution.extension.carousel.min.js",
  "/js/revolution.extension.kenburn.min.js",
  "/js/revolution.extension.layeranimation.min.js",
  "/js/revolution.extension.migration.min.js",
  "/js/revolution.extension.navigation.min.js",
  "/js/revolution.extension.parallax.min.js",
  "/js/revolution.extension.slideanims.min.js",
  "/js/revolution.extension.video.min.js",
];

const nonCriticalScripts = [
  "/js/popper.min.js",
  "/js/bootstrap.min.js",
  "/js/jquery.fancybox.js",
  "/js/jquery.countdown.js",
  "/js/wow.js",
  "/js/appear.js",
  "/js/mixitup.js",
  "/js/bxslider.js",
  "/js/swiper.min.js",
  "/js/owl.js",
  "/js/jquery-ui.js",
  "/js/script.js",
];

export default function LegacyScripts() {
  useEffect(() => {
    let cancelled = false;

    const loadScript = (src) =>
      new Promise((resolve) => {
        const selector = `script[src="${src}"]`;
        const existingScript = document.querySelector(selector);

        if (existingScript) {
          // React Strict Mode can run this effect twice in development. Wait
          // for an in-flight script rather than assuming it has already run.
          if (existingScript.dataset.legacyLoaded === "true") {
            resolve();
          } else {
            existingScript.addEventListener("load", resolve, { once: true });
            existingScript.addEventListener("error", resolve, { once: true });
          }
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => {
          script.dataset.legacyLoaded = "true";
          resolve();
        };
        script.onerror = resolve;
        document.body.appendChild(script);
      });

    const loadInOrder = async (scripts) => {
      for (const src of scripts) {
        if (cancelled) return;
        await loadScript(src);
      }
    };

    const loadScripts = async () => {
      // Only the Revolution Slider files delay the hero. Its independent
      // extensions download together instead of waiting in a 10-file queue.
      await loadInOrder(sliderCore);
      if (cancelled) return;
      await Promise.all(sliderExtensions.map(loadScript));
      if (cancelled) return;
      await loadScript("/js/main-slider-script.js");

      // These plugins register methods used by script.js, so retain their
      // dependency order while keeping them off the slider's critical path.
      void loadInOrder(nonCriticalScripts);
    };

    loadScripts();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
