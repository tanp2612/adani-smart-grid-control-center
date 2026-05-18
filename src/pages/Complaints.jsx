import { useState } from "react";
import { complaints } from "../data/gridData";

function Complaints() {
  const [status, setStatus] = useState("All");

  const filteredComplaints =
    status === "All"
      ? complaints
      : complaints.filter((complaint) => complaint.status === status);

  return (
    <section className="page-panel">
      <div className="page-heading">
        <div>
          <h2>Consumer Complaint Queue</h2>
          <p>Monitor customer issues and resolution progress.</p>
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>All</option>
          <option>Assigned</option>
          <option>Open</option>
          <option>In Review</option>
        </select>
      </div>

      <div className="table-panel">
        <div className="table-header">
          <span>ID</span>
          <span>Issue</span>
          <span>Area</span>
          <span>Status</span>
        </div>

        {filteredComplaints.map((complaint) => (
          <div className="table-row" key={complaint.id}>
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

export default Complaints;