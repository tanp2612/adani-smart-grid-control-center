import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { demandSupplyData, zoneLoads } from "../data/gridData";

function Analytics() {
  return (
    <section className="analytics-page">
      <div className="page-heading">
        <div>
          <h2>Grid Analytics</h2>
          <p>Compare electricity demand, supply, and regional load pressure.</p>
        </div>
      </div>

      <div className="analytics-grid">
        <section className="panel">
          <div className="panel-heading">
            <h2>Demand Trend</h2>
            <p>Hourly demand movement</p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandSupplyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3b3a" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#f97316"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="supply"
                stroke="#22c55e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="panel">
          <div className="panel-heading">
            <h2>Zone Load Comparison</h2>
            <p>Load percentage across regions</p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={zoneLoads}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f3b3a" />
              <XAxis dataKey="zone" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="load" fill="#14b8a6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </section>
  );
}

export default Analytics;