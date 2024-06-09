import { useParams } from "react-router-dom";
import { DashboardHeader } from "../../components/dashboard-header";
import { getSubscriptions } from "../../utils/getSubscriptions";

export function SubscriptionsPage() {
  const params = useParams();

  const subscriptionList = getSubscriptions({ user_id: params.id ?? "" });

  return (
    <>
      <DashboardHeader title="Subscription List" backButton />
      {JSON.stringify(subscriptionList)}
    </>
  );
}
