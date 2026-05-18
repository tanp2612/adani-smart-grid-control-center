import { zoneLoads } from "../data/gridData";

function ZoneLoadPanel() {
  return (
    <section className="panel zone-panel">
      <div className="panel-heading">
        <h2>Zone Load Radar</h2>
        <p>Live distribution pressure by region</p>
      </div>

      <div className="zone-map">
        {zoneLoads.map((zone) => (
          <div className="zone-node" key={zone.zone}>
            <div className="node-ring">
              <span>{zone.load}%</span>
            </div>
            <div>
              <h3>{zone.zone}</h3>
              <p>{zone.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ZoneLoadPanel;