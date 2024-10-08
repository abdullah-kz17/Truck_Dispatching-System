import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

// Components that are always needed
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import AdminLayout from "./assets/components/layouts/AdminLayout";

// Lazy-loaded components
const Home = lazy(() => import("./assets/pages/Home"));
const Login = lazy(() => import("./assets/pages/Login"));
const SignUp = lazy(() => import("./assets/pages/Signup"));
const LogOut = lazy(() => import("./assets/pages/Logout"));
const ForgotPassword = lazy(() => import("./assets/pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./assets/pages/ResetPassword"));
const Users = lazy(() => import("./assets/pages/Users"));
const EditUser = lazy(() => import("./assets/pages/EditUser"));
const ProfileSettings = lazy(() => import("./assets/pages/Profile"));
const AboutUs = lazy(() => import("./assets/pages/About-Us"));
const BlogsPage = lazy(() => import("./assets/pages/Blogs-page"));
const ContactUs = lazy(() => import("./assets/pages/ContactUs"));
const Flatbed = lazy(() => import("./assets/pages/Flatbed"));
const DryVan = lazy(() => import("./assets/pages/DryVan"));
const Reefer = lazy(() => import("./assets/pages/Reefer"));
const Messages = lazy(() => import("./assets/pages/Messages"));
const Shipments = lazy(() => import("./assets/pages/Shipments"));
const NotFound = lazy(() => import("./assets/pages/404"));

// Styles
import "./App.css";
import "./styles.scss";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dryvan" element={<DryVan />} />
          <Route path="/flatbed" element={<Flatbed />} />
          <Route path="/reefer" element={<Reefer />} />
          <Route path="/shipment" element={<Shipments />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="messages" element={<Messages />} />
            <Route path="users" element={<Users />} />
            <Route path="users/update/:id" element={<EditUser />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
