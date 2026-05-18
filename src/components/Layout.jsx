import { Outlet } from "react-router-dom";
import CommandBar from "./CommandBar";
import TopNav from "./TopNav";

function Layout() {
  return (
    <main className="control-center">
      <CommandBar />
      <TopNav />
      <Outlet />
    </main>
  );
}

export default Layout;