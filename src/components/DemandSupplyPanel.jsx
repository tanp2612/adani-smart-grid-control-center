import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { demandSupplyData } from "../data/gridData";

function DemandSupplyPanel() {
  return (
    <section className="panel demand-panel">
      <div className="panel-heading">
        <h2>Demand vs Supply</h2>
        <p>Real-time load balancing overview</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={demandSupplyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f3b3a" />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="supply"
            stroke="#22c55e"
            fill="#22c55e33"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="demand"
            stroke="#f97316"
            fill="#f9731633"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default DemandSupplyPanel;