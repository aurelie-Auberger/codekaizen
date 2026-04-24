import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = "https://tally.so/widgets/embed.js";
const CALENDLY_URL = "https://calendly.com/aurelie-codekaizen/30min";

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
    } else if (document.querySelector(`script[src="${TALLY_SRC}"]`)) {
      load();
    } else {
      const s = document.createElement("script");
      s.src = TALLY_SRC;
      s.onload = load;
      s.onerror = load;
      document.body.appendChild(s);
    }

    // Listen for Tally form submission and redirect to Calendly
    const handleMessage = (e: MessageEvent) => {
      const data = e.data;
      if (typeof data === "string" && data.includes("Tally.FormSubmitted")) {
        window.open(CALENDLY_URL, "_blank");
      } else if (data && typeof data === "object") {
        try {
          const str = JSON.stringify(data);
          if (str.includes("Tally.FormSubmitted")) {
            window.open(CALENDLY_URL, "_blank");
          }
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
