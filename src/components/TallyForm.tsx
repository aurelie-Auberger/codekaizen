import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = "https://tally.so/widgets/embed.js";

const TallyForm = () => {
  useEffect(() => {
    const load = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
          .forEach((el) => {
            el.src = el.dataset.tallySrc ?? "";
          });
      }
    };

    if (window.Tally) {
      load();
      return;
    }
    if (document.querySelector(`script[src="${TALLY_SRC}"]`)) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SRC;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/zx0Nrg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="500"
      frameBorder={0}
      title="Audit Flash — Code Kaizen"
      className="w-full block"
    />
  );
};

export default TallyForm;
