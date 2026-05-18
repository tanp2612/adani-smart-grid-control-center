import { liveStats } from "../data/gridData";

function LiveStatusStrip() {
  return (
    <section className="status-strip">
      {liveStats.map((item) => (
        <article className="status-tile" key={item.label}>
          <p>{item.label}</p>
          <h2>{item.value}</h2>
          <span>{item.status}</span>
        </article>
      ))}
    </section>
  );
}

export default LiveStatusStrip;