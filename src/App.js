import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GuestRoute from "./components/auth/GuestRoute";
import Display from "./Pages/Display";
import Home from "./Pages/Home";
import Yacht from "./Pages/Yacht";
import Events from "./Pages/Events";
import YachtClub from "./Pages/YachtClub";
import Commitment from "./Pages/Commitment";
import SignIn from "./Pages/auth/SignIn";
import SignUp from "./Pages/auth/SignUp";
import ForgotPassword from "./Pages/auth/ForgotPassword";
import ResetPassword from "./Pages/auth/ResetPassword";
import Profile from "./Pages/Profile";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Display />} />

            <Route element={<MainLayout />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/Yacht" element={<Yacht />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/YachtClub" element={<YachtClub />} />
              <Route path="/Commitment" element={<Commitment />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/sign-in"
              element={
                <GuestRoute>
                  <SignIn />
                </GuestRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <GuestRoute>
                  <SignUp />
                </GuestRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <GuestRoute>
                  <ForgotPassword />
                </GuestRoute>
              }
            />
            <Route
              path="/reset-password"
              element={
                <GuestRoute>
                  <ResetPassword />
                </GuestRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
