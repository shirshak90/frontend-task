import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { DashboardHeader } from "../../components/dashboard-header";
import { getUserSubscriptions } from "../../utils/getUserSubscriptions";
import { TableContextProvider } from "../../context/table-context/table-context";
import { DataTable } from "../../components/data-table";
import { columns } from "./components/subscription-column";
import { ISubscription } from "./types/subscription-types";

export function SubscriptionsPage() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState<ISubscription[] | []>([]);

  useEffect(() => {
    setIsLoading(true);
    getUserSubscriptions({ user_id: params.id ?? "" })
      .then((data) => setSubscriptions(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <DashboardHeader title="Subscription History" backButton />
      <TableContextProvider columns={columns} data={subscriptions}>
        <DataTable />
      </TableContextProvider>
    </>
  );
}
