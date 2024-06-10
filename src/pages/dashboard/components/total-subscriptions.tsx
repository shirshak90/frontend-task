import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../../components/card";
import { FaRegUser } from "react-icons/fa";
import { getPlanCount } from "../../../utils/getPlanCount";

export function TotalSubscriptions() {
  const subscriptions = getPlanCount();
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<FaRegUser />}>
          <p>Total Subscriptions</p>
        </CardTitle>
        <CardContent>
          <p style={{ fontSize: "2rem", fontWeight: 600 }}>
            +{subscriptions.totalPlans}
          </p>
          <CardDescription>Till Date</CardDescription>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
