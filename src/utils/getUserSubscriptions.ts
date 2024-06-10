import { subscriptions } from "../data";

interface GetSubscriptionsProps {
  user_id: string;
}

export async function getUserSubscriptions({ user_id }: GetSubscriptionsProps) {
  const filteredSubscriptions = subscriptions.filter(
    (subscription) => subscription.user_id === user_id
  );

  return filteredSubscriptions;
}
