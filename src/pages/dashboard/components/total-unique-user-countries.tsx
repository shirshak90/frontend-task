import { FaRegMap } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { getTotalCountries } from "../../../utils/getTotalCountries";

export function TotalUniqueUserCountries() {
  const total = getTotalCountries();

  return (
    <Card>
      <CardHeader>
        <CardTitle icon={<FaRegMap />}>
          <p>Total Unique User Countries</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p style={{ fontSize: "2rem", fontWeight: 600 }}>+{total}</p>
        <CardDescription>And Counting</CardDescription>
      </CardContent>
    </Card>
  );
}
