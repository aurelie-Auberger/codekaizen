import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  ComposedChart,
  LabelList,
} from "recharts";

const data = [
  { s: "S1", Leads: 8, SQL: 0, Calls: 0 },
  { s: "S2", Leads: 14, SQL: 0, Calls: 0 },
  { s: "S3", Leads: 28, SQL: 0, Calls: 0 },
  { s: "S4", Leads: 52, SQL: 0, Calls: 0 },
  { s: "S5", Leads: 85, SQL: 2, Calls: 0 },
  { s: "S6", Leads: 124, SQL: 8, Calls: 3 },
  { s: "S7", Leads: 168, SQL: 11, Calls: 5 },
  { s: "S8", Leads: 215, SQL: 14, Calls: 6 },
  { s: "S9", Leads: 268, SQL: 17, Calls: 7 },
  { s: "S10", Leads: 320, SQL: 19, Calls: 8 },
  { s: "S11", Leads: 375, SQL: 21, Calls: 9 },
  { s: "S12", Leads: 430, SQL: 22, Calls: 9 },
];

const LegendItem = ({ color, label, hex }: { color: string; label: string; hex: string }) => (
  <div className="flex items-center gap-2">
    <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
    <span className="text-white text-xs md:text-sm font-medium">{label}</span>
    <span className="text-[10px] md:text-xs text-white/40 font-mono">{hex}</span>
  </div>
);

export default function PipelineChart() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#0a1424]">
      <div className="max-w-5xl mx-auto">
        {/* Laptop frame */}
        <div className="rounded-2xl bg-[#0f1117] border border-white/10 shadow-2xl overflow-hidden">
          {/* Browser bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#0f1117] border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-3 py-1 rounded-md bg-white/5 text-white/50 text-[11px] md:text-xs font-mono max-w-[240px] truncate">
                codekaizen.fr
              </div>
            </div>
            <div className="w-12" />
          </div>
          {/* Screen content */}
          <div className="relative bg-[#0d1b2e] p-5 md:p-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <h3 className="font-serif text-white text-lg md:text-2xl">
              Évolution des Leads et Conversions
            </h3>
            <div className="flex flex-wrap gap-3 md:gap-5">
              <LegendItem color="#1d9e75" label="Leads" hex="#1d9e75" />
              <LegendItem color="#c9a96e" label="SQL" hex="#c9a96e" />
              <LegendItem color="#534ab7" label="Calls" hex="#534ab7" />
            </div>
          </div>

          {/* Chart */}
          <div className="h-[300px] md:h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="leadsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1d9e75" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#1d9e75" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="sqlFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a96e" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#c9a96e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={true} />
                <XAxis
                  dataKey="s"
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide domain={[0, 480]} />
                <Area type="monotone" dataKey="Leads" stroke="none" fill="url(#leadsFill)" />
                <Area type="monotone" dataKey="SQL" stroke="none" fill="url(#sqlFill)" />
                <Line
                  type="monotone"
                  dataKey="Leads"
                  stroke="#1d9e75"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#1d9e75", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                >
                  <LabelList dataKey="Leads" position="top" fill="#ffffff" fontSize={11} offset={8} />
                </Line>
                <Line
                  type="monotone"
                  dataKey="SQL"
                  stroke="#c9a96e"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#c9a96e", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                >
                  <LabelList dataKey="SQL" position="top" fill="#ffffff" fontSize={11} offset={8} />
                </Line>
                <Line
                  type="monotone"
                  dataKey="Calls"
                  stroke="#534ab7"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "#534ab7", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                >
                  <LabelList dataKey="Calls" position="bottom" fill="#ffffff" fontSize={11} offset={8} />
                </Line>
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-6 pt-4 border-t border-white/5">
            <p className="text-[11px] md:text-xs text-white/40">
              Données représentatives · marché B2B France
            </p>
            <p className="text-[11px] md:text-xs text-white/60 font-serif">
              Revenue, by <span className="text-[#c9a84c]">system.</span>
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
