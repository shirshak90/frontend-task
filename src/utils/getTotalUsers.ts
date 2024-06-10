import { users } from "../data";

export function getTotalUsers() {
  const totalUsers = users.length;
  const userStatus = { active: 0, inactive: 0 };

  users.forEach((user) =>
    user.active === "0" ? (userStatus.active += 1) : (userStatus.inactive += 1)
  );

  return { totalUsers, userStatus };
}
