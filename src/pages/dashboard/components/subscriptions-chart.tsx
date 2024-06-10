import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/card";
import { getPlanCount } from "../../../utils/getPlanCount";
import { colorScheme } from "../../../constants/colorScheme";

ChartJS.register(ArcElement, Tooltip, Legend);

export function SubscriptionChart() {
  const subscriptions = getPlanCount();

  const pieData = {
    labels: Object.keys(subscriptions.planCounts),
    datasets: [
      {
        label: "Total",
        data: Object.values(subscriptions.planCounts).map((item) => +item),
        borderWidth: 1,
        backgroundColor: Object.keys(subscriptions.planCounts).map(
          (_, index) => colorScheme[index]
        ),
        borderColor: Object.keys(subscriptions.planCounts).map(
          (_, index) => colorScheme[index]
        ),
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p>Subscription Chart</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="chart-container">
          <Pie
            data={pieData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
