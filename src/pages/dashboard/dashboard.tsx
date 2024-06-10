import { DashboardHeader } from "../../components/dashboard-header";
import { SubscriptionChart } from "./components/subscriptions-chart";
import { TotalSubscriptions } from "./components/total-subscriptions";
import { TotalUsers } from "./components/total-users";
import { UsersChart } from "./components/users-chart";

export function DashboardPage() {
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="dashboard-info-cards">
        <TotalUsers />
        <TotalSubscriptions />
      </div>

      <div className="dashboard-charts">
        <SubscriptionChart />
        <UsersChart />
      </div>
    </div>
  );
}
