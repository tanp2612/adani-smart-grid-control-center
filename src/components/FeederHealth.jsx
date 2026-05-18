import { feeders } from "../data/gridData";

function FeederHealth() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Feeder Health</h2>
        <p>Infrastructure performance score</p>
      </div>

      <div className="feeder-list">
        {feeders.map((feeder) => (
          <div className="feeder-row" key={feeder.name}>
            <div>
              <h3>{feeder.name}</h3>
              <p>{feeder.zone}</p>
            </div>

            <div className="health-meter">
              <div style={{ width: `${feeder.health}%` }}></div>
            </div>

            <strong>{feeder.health}%</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeederHealth;