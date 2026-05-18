import { dispatchTeams } from "../data/gridData";

function DispatchBoard() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Technician Dispatch</h2>
        <p>Field team assignment board</p>
      </div>

      <div className="dispatch-list">
        {dispatchTeams.map((team) => (
          <article className="dispatch-card" key={team.team}>
            <span>{team.team}</span>
            <h3>{team.task}</h3>
            <p>{team.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DispatchBoard;