import { useState } from "react";
import { outages } from "../data/gridData";

function Outages() {
  const [priority, setPriority] = useState("All");

  const filteredOutages =
    priority === "All"
      ? outages
      : outages.filter((outage) => outage.priority === priority);

  return (
    <section className="page-panel">
      <div className="page-heading">
        <div>
          <h2>Outage Management</h2>
          <p>Track and prioritize active grid incidents.</p>
        </div>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>All</option>
          <option>Critical</option>
          <option>High</option>
          <option>Medium</option>
        </select>
      </div>

      <div className="large-list">
        {filteredOutages.map((item) => (
          <article className="wide-card" key={item.area}>
            <div>
              <span className={`priority ${item.priority.toLowerCase()}`}>
                {item.priority}
              </span>
              <h3>{item.area}</h3>
              <p>{item.issue}</p>
            </div>

            <div className="wide-meta">
              <p>Estimated Resolution</p>
              <strong>{item.eta}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Outages;