import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UsersPage } from "./pages/users/users";
import { SubscriptionsPage } from "./pages/subscriptions/subscriptions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/subscriptions/:id" element={<SubscriptionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
