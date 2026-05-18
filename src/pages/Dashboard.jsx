import LiveStatusStrip from "../components/LiveStatusStrip";
import ZoneLoadPanel from "../components/ZoneLoadPanel";
import DemandSupplyPanel from "../components/DemandSupplyPanel";
import OutagePanel from "../components/OutagePanel";
import FeederHealth from "../components/FeederHealth";
import DispatchBoard from "../components/DispatchBoard";
import ComplaintQueue from "../components/ComplaintQueue";

function Dashboard() {
  return (
    <>
      <LiveStatusStrip />

      <section className="control-grid">
        <ZoneLoadPanel />
        <DemandSupplyPanel />
        <OutagePanel />
      </section>

      <section className="operations-grid">
        <FeederHealth />
        <DispatchBoard />
        <ComplaintQueue />
      </section>
    </>
  );
}

export default Dashboard;