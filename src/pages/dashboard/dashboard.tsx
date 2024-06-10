import { DashboardHeader } from "../../components/dashboard-header";
import { TotalSubscriptions } from "./components/total-subscriptions";
import { TotalUsers } from "./components/total-users";

export function DashboardPage() {
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="dashboard-info-cards">
        <TotalUsers />
        <TotalSubscriptions />
      </div>

      <div className="dashboard-charts"></div>
    </div>
  );
}
