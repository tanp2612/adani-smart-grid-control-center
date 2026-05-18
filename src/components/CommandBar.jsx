import { Bell, CheckCircle2, RadioTower, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { outages, dispatchTeams } from "../data/gridData";

function CommandBar() {
  const [showIncidents, setShowIncidents] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <>
      <header className="command-bar">
        <div className="brand-block">
          <div className="brand-icon">
            <RadioTower size={24} />
          </div>

          <div>
            <p>Adani Electricity Operations</p>
            <h1>Smart Grid Control Center</h1>
          </div>
        </div>

        <div className="command-actions">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search feeder, outage, zone..." />
          </div>

          <button
            className="alert-button pulse-alert"
            onClick={() => setShowIncidents(true)}
          >
            <Bell size={18} />
            Live Incidents
          </button>
        </div>
      </header>

      {showIncidents && (
        <div className="incident-overlay">
          <aside className="incident-drawer">
            <div className="incident-header">
              <div>
                <p>Real-time Operations Feed</p>
                <h2>Live Incidents</h2>
              </div>

              <button onClick={() => setShowIncidents(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="incident-summary">
              <article>
                <span>Critical</span>
                <strong>1</strong>
              </article>

              <article>
                <span>High Priority</span>
                <strong>1</strong>
              </article>

              <article>
                <span>Teams Active</span>
                <strong>{dispatchTeams.length}</strong>
              </article>
            </div>

            <div className="incident-feed">
              {outages.map((item) => (
                <article className="incident-card" key={item.area}>
                  <div className="incident-top">
                    <span className={`priority ${item.priority.toLowerCase()}`}>
                      {item.priority}
                    </span>
                    <small>ETA {item.eta}</small>
                  </div>

                  <h3>{item.area}</h3>
                  <p>{item.issue}</p>

                  <button onClick={() => setSelectedIncident(item)}>
                    View Response Plan
                  </button>
                </article>
              ))}
            </div>
          </aside>
        </div>
      )}

      {selectedIncident && (
        <div className="response-overlay">
          <section className="response-modal">
            <div className="response-header">
              <div>
                <p>Incident Response Plan</p>
                <h2>{selectedIncident.area}</h2>
              </div>

              <button onClick={() => setSelectedIncident(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="response-alert">
              <ShieldCheck size={22} />
              <div>
                <strong>{selectedIncident.issue}</strong>
                <span>
                  {selectedIncident.priority} Priority · ETA {selectedIncident.eta}
                </span>
              </div>
            </div>

            <div className="response-info-grid">
              <article>
                <span>Assigned Team</span>
                <strong>{selectedIncident.team}</strong>
              </article>

              <article>
                <span>Affected Consumers</span>
                <strong>{selectedIncident.affectedConsumers}</strong>
              </article>

              <article>
                <span>Resolution Window</span>
                <strong>{selectedIncident.eta}</strong>
              </article>
            </div>

            <div className="response-section">
              <h3>Action Timeline</h3>

              <div className="timeline">
                {selectedIncident.steps.map((step, index) => (
                  <div className="timeline-step" key={step}>
                    <div className="step-marker">{index + 1}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="response-section">
              <h3>Safety Checklist</h3>

              <div className="checklist">
                <span>
                  <CheckCircle2 size={17} />
                  Field team notified
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Load rerouting reviewed
                </span>

                <span>
                  <CheckCircle2 size={17} />
                  Consumer alert prepared
                </span>
              </div>
            </div>

            <button
              className="resolve-button"
              onClick={() => setSelectedIncident(null)}
            >
              Mark Response Plan Reviewed
            </button>
          </section>
        </div>
      )}
    </>
  );
}

export default CommandBar;