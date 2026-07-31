import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Loader from "../components/common/Loader";
import DashboardLayout from "../layout/DashboardLayout";

const Login = lazy(() => import("../pages/Login/Login"));

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const VehicleList = lazy(() => import("../pages/Vehicle/VehicleList"));
const Register = lazy(() => import("../pages/Register/Register"));
const MyBooking = lazy(() => import("../pages/Booking/MyBooking"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <VehicleList />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <MyBooking />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
