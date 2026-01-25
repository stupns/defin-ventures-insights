import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { name: "Kratos Fund", return: 72.8, fill: "hsl(var(--foreground))" },
  { name: "Bitcoin", return: 45.2, fill: "hsl(var(--taupe))" },
  { name: "Ethereum", return: 38.5, fill: "hsl(var(--accent))" },
  { name: "S&P 500", return: 12.4, fill: "hsl(var(--muted-foreground))" },
];

const metrics = [
  { label: "Sharpe Ratio", value: "3.2" },
  { label: "Sortino Ratio", value: "4.1" },
  { label: "Drawdown", value: "7.5%" },
  { label: "Beta", value: "0.05" },
  { label: "Full Year 2025 Return", value: "72.75%" },
  { label: "2026 AUM", value: "$35M" },
];

const riskDistribution = [
  { tier: "Conservative", percentage: 25, color: "bg-accent" },
  { tier: "Moderate", percentage: 45, color: "bg-taupe" },
  { tier: "Aggressive", percentage: 30, color: "bg-foreground" },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-label text-muted-foreground block mb-4">
            Performance
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Proven Track Record of
            <br />
            <span className="italic">Exceptional Returns</span>
          </h2>
          <p className="text-refined text-muted-foreground">
            Our disciplined approach consistently outperforms major market
            benchmarks while maintaining robust risk management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Performance Chart */}
          <div className="bg-card border border-border p-6 lg:p-8">
            <h3 className="heading-subsection text-foreground mb-2">
              Kratos Fund vs. Market Benchmarks (2025)
            </h3>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  layout="vertical"
                  margin={{
                    left: 20,
                    right: 40,
                    bottom: 28, // 🔑 місце для тік-лейблів
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    horizontal
                    vertical={false}
                  />

                  <XAxis
                    type="number"
                    domain={[0, 70]}
                    ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
                    interval={0}
                    minTickGap={0}
                    allowDecimals={false}
                    tickMargin={8}
                    fontSize={11}
                    tickFormatter={(v) => `${v}%`}
                    stroke="hsl(var(--muted-foreground))"
                  />

                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    width={80}
                  />

                  <Tooltip
                    formatter={(value: number) => [`${value}%`, "Return"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  />

                  <Bar
                    dataKey="return"
                    radius={[0, 4, 4, 0]}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="space-y-8">
            <div className="bg-card border border-border p-6 lg:p-8">
              <h3 className="heading-subsection text-foreground mb-6">
                Risk-Adjusted Metrics (2025)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="text-center p-4 bg-secondary/50"
                  >
                    <p className="font-heading text-3xl font-light text-foreground mb-1">
                      {metric.value}
                    </p>
                    <p className="text-label text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-card border border-border p-6 lg:p-8">
              <h3 className="heading-subsection text-foreground mb-6">
                Client Risk Tier Distribution
              </h3>
              <div className="space-y-4">
                {riskDistribution.map((tier) => (
                  <div key={tier.tier}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">
                        {tier.tier}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {tier.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tier.color} transition-all duration-1000`}
                        style={{ width: `${tier.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
