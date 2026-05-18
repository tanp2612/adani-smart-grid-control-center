import {
  Activity,
  AlertTriangle,
  BarChart3,
  ClipboardList,
  RadioTower,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <nav className="top-nav">
      <NavLink to="/" end>
        <Activity size={17} />
        Control Room
      </NavLink>

      <NavLink to="/outages">
        <AlertTriangle size={17} />
        Outage Desk
      </NavLink>

      <NavLink to="/feeders">
        <RadioTower size={17} />
        Feeder Network
      </NavLink>

      <NavLink to="/complaints">
        <ClipboardList size={17} />
        Consumer Desk
      </NavLink>

      <NavLink to="/analytics">
        <BarChart3 size={17} />
        Grid Analytics
      </NavLink>
    </nav>
  );
}

export default TopNav;