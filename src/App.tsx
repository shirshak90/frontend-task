import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UsersPage } from "./pages/users/users";
import { SubscriptionsPage } from "./pages/subscriptions/subscriptions";
import { DashboardLayout } from "./layout/dashboard-layout";
import { DashboardPage } from "./pages/dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/subscriptions/:id" element={<SubscriptionsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
