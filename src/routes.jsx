import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";
import MFAVerify from "./pages/auth/MFAVerify";
import MFASetup from "./pages/auth/MFASetup";
import WebAuthnSetup from "./pages/auth/WebAuthnSetup";
import WebAuthnLogin from "./pages/auth/WebAuthnLogin";
import BackupCodes from "./pages/auth/BackupCodes";
import BackupCodesVerify from "./pages/auth/BackupCodeVerify";

import DashboardIndex from "./pages/dashboard/Index";
import Security from "./pages/dashboard/Security";
import Sessions from "./pages/dashboard/Sessions";

import NotFound from "./pages/errors/NotFound";
import Unauthorized from "./pages/errors/Unauthorized";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
// const routes = [
//   { path: "/", element: <Home /> },

//   // Auth
//   { path: "/login", element: <Login /> },
//   { path: "/register", element: <Register /> },
//   { path: "/verify-email", element: <VerifyEmail /> },
//   { path: "/mfa/verify", element: <MFAVerify /> },
//   { path: "/mfa/setup", element: <MFASetup /> },
//   { path: "/webauthn/setup", element: <WebAuthnSetup /> },
//   { path: "/webauthn/login", element: <WebAuthnLogin /> },
//   { path: "/backup-codes", element: <BackupCodes /> },
//   { path: "/backup-codes/verify", element: <BackupCodesVerify /> },

//   // Dashboard
//   { path: "/dashboard", element: <DashboardIndex /> },
//   { path: "/dashboard/security", element: <Security /> },
//   { path: "/dashboard/sessions", element: <Sessions /> },

//   // Profile & settings
//   { path: "/profile", element: <Profile /> },
//   { path: "/settings", element: <Settings /> },

//   // Errors
//   { path: "/unauthorized", element: <Unauthorized /> },
//   { path: "*", element: <NotFound /> },
// ];

// export default routes;
const routes = [
  { path: "/", element: <Home /> },

  // Auth
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/mfa/verify", element: <MFAVerify /> },
  { path: "/mfa/setup", element: <MFASetup /> },
  { path: "/webauthn/setup", element: <WebAuthnSetup /> },
  { path: "/webauthn/login", element: <WebAuthnLogin /> },
  { path: "/backup-codes", element: <BackupCodes /> },
  { path: "/backup-codes/verify", element: <BackupCodesVerify /> },

  // Protected Dashboard
  { path: "/dashboard", element: <ProtectedRoute><DashboardIndex /></ProtectedRoute> },
  { path: "/dashboard/security", element: <ProtectedRoute><Security /></ProtectedRoute> },
  { path: "/dashboard/sessions", element: <ProtectedRoute><Sessions /></ProtectedRoute> },

  // Protected Profile & Settings
  { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
  { path: "/settings", element: <ProtectedRoute><Settings /></ProtectedRoute> },

  // Errors
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "*", element: <NotFound /> },
];

export default routes;