import { useEffect } from "react";
import "./App.css";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import CloudSolutionsPage from "./pages/CloudSolutionsPage";
import ContactPage from "./pages/ContactPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import DynamicPage from "./pages/DynamicPage";
import Home from "./pages/Home";
import IndustriesPage from "./pages/IndustriesPage";
import JobScamAlertPage from "./pages/JobScamAlertPage";
import StaffingPage from "./pages/StaffingPage";
import CookieConsent from "./components/CookieConsent";
import JobScamAlert from "./components/JobScamAlert";
import VisitorBadge from "./components/VisitorBadge";
import { useHashPath } from "./router";

const staticRoutes = {
  "/": Home,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/industries": IndustriesPage,
  "/talent-solutions": StaffingPage,
  "/cloud-solutions": CloudSolutionsPage,
  "/careers/apply": ApplyJobPage,
  "/job-scam-alert": JobScamAlertPage,
  "/cookie-policy": CookiePolicyPage,
};

function App() {
  const path = useHashPath();
  const StaticPage = staticRoutes[path];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{StaticPage ? <StaticPage /> : <DynamicPage path={path} />}</main>
      <Footer />
      <VisitorBadge />
      <JobScamAlert />
      <CookieConsent />
    </>
  );
}

export default App;
