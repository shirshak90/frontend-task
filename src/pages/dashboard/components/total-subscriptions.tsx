import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../../components/card";
import { FaList } from "react-icons/fa";

import { getPlanCount } from "../../../utils/getPlanCount";

export function TotalSubscriptions() {
  const subscriptions = getPlanCount();
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<FaList />}>
          <p>Total Subscriptions</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "2rem", fontWeight: 600 }}>
          +{subscriptions.totalPlans}
        </p>
        <CardDescription>Till Date</CardDescription>
      </CardContent>
    </Card>
  );
}
