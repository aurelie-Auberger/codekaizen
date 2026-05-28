export default function PipelineChart() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0a1424]">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div style={{ background: "#0f1117", borderRadius: "12px", padding: "24px", display: "inline-block", width: "100%" }}>
          <img
            src="/Dashboard.png"
            alt="Évolution du pipeline — Code Kaizen"
            className="w-full max-w-4xl rounded-xl"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>
      </div>
    </section>
  );
}
