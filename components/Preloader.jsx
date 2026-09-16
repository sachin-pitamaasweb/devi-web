"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minimumDuration = prefersReducedMotion ? 0 : 1800;
    const fallbackDuration = prefersReducedMotion ? 300 : 2300;
    const startedAt = performance.now();
    let animationFrame;
    let finishTimer;
    let fallbackTimer;
    let exitTimer;
    let pageLoaded = document.readyState === "complete";
    let hasFinished = false;

    const finish = () => {
      if (hasFinished) return;
      hasFinished = true;
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimer);
      setProgress(100);
      finishTimer = window.setTimeout(() => {
        setIsExiting(true);
        exitTimer = window.setTimeout(() => setIsHidden(true), 450);
      }, prefersReducedMotion ? 0 : 180);
    };

    const completeWhenReady = () => {
      pageLoaded = true;
      const elapsed = performance.now() - startedAt;
      finishTimer = window.setTimeout(finish, Math.max(0, minimumDuration - elapsed));
    };

    const updateProgress = () => {
      const elapsed = performance.now() - startedAt;
      const visualDuration = pageLoaded ? minimumDuration : fallbackDuration;
      const nextProgress = pageLoaded
        ? Math.min(99, (elapsed / Math.max(visualDuration, 1)) * 100)
        : Math.min(92, (elapsed / fallbackDuration) * 92);

      setProgress(Math.round(nextProgress));
      animationFrame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    if (pageLoaded) {
      completeWhenReady();
    }
    window.addEventListener("load", completeWhenReady, { once: true });
    fallbackTimer = window.setTimeout(finish, fallbackDuration);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("load", completeWhenReady);
      window.clearTimeout(finishTimer);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      className={`preloader${isExiting ? " is-exiting" : ""}${isHidden ? " is-hidden" : ""}`}
      role="status"
      aria-label="Loading website content"
      aria-live="polite"
    >
      <div className="preloader__content">
        <img
          className="preloader__logo"
          src="/images/dcs-logo.png"
          alt="DCS – Devi Chand & Sons"
        />
        <div className="preloader__bar" aria-hidden="true">
          <span className="preloader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="preloader__meta">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
