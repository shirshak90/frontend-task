import { useParams } from "react-router-dom";

import { DashboardHeader } from "../../components/dashboard-header";
import { getSubscriptions } from "../../utils/getSubscriptions";
import { TableContextProvider } from "../../context/table-context/table-context";
import { DataTable } from "../../components/data-table";
import { columns } from "./components/subscription-column";

export function SubscriptionsPage() {
  const params = useParams();

  const subscriptionList = getSubscriptions({ user_id: params.id ?? "" });

  return (
    <>
      <DashboardHeader title="Subscription History" backButton />
      <TableContextProvider columns={columns} data={subscriptionList}>
        <DataTable />
      </TableContextProvider>
    </>
  );
}
