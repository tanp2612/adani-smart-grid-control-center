import { useState } from "react";
import { feeders } from "../data/gridData";

function Feeders() {
  const [search, setSearch] = useState("");

  const filteredFeeders = feeders.filter(
    (feeder) =>
      feeder.name.toLowerCase().includes(search.toLowerCase()) ||
      feeder.zone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-panel">
      <div className="page-heading">
        <div>
          <h2>Feeder Health Monitor</h2>
          <p>Search and inspect distribution feeder performance.</p>
        </div>

        <input
          type="text"
          placeholder="Search feeder or zone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="feeder-grid">
        {filteredFeeders.map((feeder) => (
          <article className="feeder-card-large" key={feeder.name}>
            <div>
              <h3>{feeder.name}</h3>
              <p>{feeder.zone}</p>
            </div>

            <div className="circle-score">
              <span>{feeder.health}%</span>
            </div>

            <p>
              {feeder.health >= 85
                ? "Healthy"
                : feeder.health >= 70
                ? "Needs Monitoring"
                : "Maintenance Required"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Feeders;