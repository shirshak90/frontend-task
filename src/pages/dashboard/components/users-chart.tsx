import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/card";
import { getTotalUsers } from "../../../utils/getTotalUsers";
import { colorScheme } from "../../../constants/colorScheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function UsersChart() {
  const users = getTotalUsers();

  const barData = {
    labels: Object.keys(users.userStatus).map((item) => item.toUpperCase()),
    datasets: [
      {
        label: "User Status",
        data: Object.values(users.userStatus),
        backgroundColor: Object.keys(users.userStatus).map(
          (_, index) => colorScheme[index]
        ),
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p>Users Chart</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            data={barData}
          />
        </div>
      </CardContent>
    </Card>
  );
}
