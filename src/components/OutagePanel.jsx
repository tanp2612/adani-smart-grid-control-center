import { outages } from "../data/gridData";

function OutagePanel() {
  return (
    <section className="panel outage-panel">
      <div className="panel-heading">
        <h2>Outage Command Queue</h2>
        <p>Priority incidents requiring action</p>
      </div>

      <div className="outage-list">
        {outages.map((item) => (
          <article className="outage-card" key={item.area}>
            <div>
              <h3>{item.area}</h3>
              <p>{item.issue}</p>
            </div>
            <div className="outage-meta">
              <span className={`priority ${item.priority.toLowerCase()}`}>
                {item.priority}
              </span>
              <strong>{item.eta}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OutagePanel;