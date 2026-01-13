import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "Kratos Fund", return: 276.52, fill: "hsl(var(--foreground))" },
  { name: "Bitcoin", return: 185.3, fill: "hsl(var(--taupe))" },
  { name: "Ethereum", return: 142.8, fill: "hsl(var(--accent))" },
  { name: "S&P 500", return: 95.2, fill: "hsl(var(--muted-foreground))" },
];

const metrics = [
  { label: "Sharpe Ratio", value: "1.8" },
  { label: "Sortino Ratio", value: "2.3" },
  { label: "Volatility", value: "11%" },
  { label: "Beta", value: "0.05" },
  { label: "YTD Return", value: "32.94%" },
  { label: "AUM", value: "$20.37M" },
];

const riskDistribution = [
  { tier: "Conservative", percentage: 30, color: "bg-accent" },
  { tier: "Moderate", percentage: 45, color: "bg-taupe" },
  { tier: "Aggressive", percentage: 25, color: "bg-foreground" },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-label text-muted-foreground block mb-4">Performance</span>
          <h2 className="heading-section text-foreground mb-6">
            Proven Track Record of
            <br />
            <span className="italic">Exceptional Returns</span>
          </h2>
          <p className="text-refined text-muted-foreground">
            Our disciplined approach consistently outperforms major market benchmarks while maintaining robust risk management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Performance Chart */}
          <div className="bg-card border border-border p-6 lg:p-8">
            <h3 className="heading-subsection text-foreground mb-2">36-Month Performance</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Kratos Fund leads with 2.8x returns vs major crypto and equity indices
            </p>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData} layout="vertical" margin={{ left: 20, right: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
                  <XAxis 
                    type="number" 
                    tickFormatter={(value) => `${value}%`}
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
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
                  <Bar dataKey="return" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="space-y-8">
            <div className="bg-card border border-border p-6 lg:p-8">
              <h3 className="heading-subsection text-foreground mb-6">Risk-Adjusted Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-4 bg-secondary/50">
                    <p className="font-heading text-3xl font-light text-foreground mb-1">{metric.value}</p>
                    <p className="text-label text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Distribution */}
            <div className="bg-card border border-border p-6 lg:p-8">
              <h3 className="heading-subsection text-foreground mb-6">Client Risk Tier Distribution</h3>
              <div className="space-y-4">
                {riskDistribution.map((tier) => (
                  <div key={tier.tier}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-foreground">{tier.tier}</span>
                      <span className="text-sm text-muted-foreground">{tier.percentage}%</span>
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
