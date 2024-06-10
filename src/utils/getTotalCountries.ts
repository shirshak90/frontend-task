import { users } from "../data";

export function getTotalCountries() {
  return new Set(users.map((user) => user.country)).size;
}
