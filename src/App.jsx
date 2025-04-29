import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/settings" element={<AccountSettings />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
