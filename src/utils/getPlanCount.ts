import { subscriptions } from "../data";

type PlanCount = {
  [key: string]: number | string;
};

export function getPlanCount() {
  const totalPlans = subscriptions.length;

  const planCounts = subscriptions.reduce<PlanCount>((acc, curr) => {
    acc[curr.package] = ((acc[curr.package] as number) || 0) + 1;
    return acc;
  }, {});

  return { totalPlans, planCounts };
}
