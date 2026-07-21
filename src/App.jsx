import { useEffect } from "react";
import "./styles/base.css";
// The three imports below back components that are not currently referenced
// anywhere in the page tree (Hero, Services, PolicyModal are dead/unused).
// Their CSS is kept loaded here, exactly as before the App.css split, so the
// built stylesheet is unchanged even though nothing currently renders them.
import "./components/Hero.css";
import "./components/Services.css";
import "./components/PolicyModal.css";
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
import IsmsPolicyPage from "./pages/IsmsPolicyPage";
import JobScamAlertPage from "./pages/JobScamAlertPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
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
  "/privacy-policy": PrivacyPolicyPage,
  "/isms-policy": IsmsPolicyPage,
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
      <JobScamAlert />
      <main>{StaticPage ? <StaticPage /> : <DynamicPage path={path} />}</main>
      <Footer />
      <VisitorBadge />
      <CookieConsent />
    </>
  );
}

export default App;
