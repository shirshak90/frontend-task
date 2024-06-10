import { FaRegUser } from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../../components/card";
import { getTotalUsers } from "../../../utils/getTotalUsers";

export function TotalUsers() {
  const users = getTotalUsers();
  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<FaRegUser />}>
          <p>Total Users</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "2rem", fontWeight: 600 }}>+{users.totalUsers}</p>
        <CardDescription>Till Date</CardDescription>
      </CardContent>
    </Card>
  );
}
