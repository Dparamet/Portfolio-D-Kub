"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function revealAll() {
  document
    .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    .forEach((element) => element.classList.add("is-visible"));
}

export default function MotionObserver() {
  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.dataset.motionReady = "true";

    if (
      window.matchMedia(REDUCED_MOTION_QUERY).matches ||
      !("IntersectionObserver" in window)
    ) {
      revealAll();

      return () => {
        delete documentElement.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.14,
      },
    );

    const register = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          observer.observe(element);
        }
      });
    };

    register(document);

    const mutationObserver = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          if (node.matches(REVEAL_SELECTOR)) {
            observer.observe(node);
          }

          register(node);
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      delete documentElement.dataset.motionReady;
    };
  }, []);

  return null;
}
