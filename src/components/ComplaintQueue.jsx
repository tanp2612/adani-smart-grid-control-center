import { complaints } from "../data/gridData";

function ComplaintQueue() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Complaint Queue</h2>
        <p>Consumer-side issue tracking</p>
      </div>

      <div className="complaint-table">
        {complaints.map((complaint) => (
          <div className="complaint-row" key={complaint.id}>
            <span>{complaint.id}</span>
            <strong>{complaint.type}</strong>
            <p>{complaint.area}</p>
            <em>{complaint.status}</em>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComplaintQueue;