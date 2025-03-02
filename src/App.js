import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./controller/routes";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import DubaiHomePage from "./pages/DubaiHomePage";
import BlogDashboard from "./pages/BlogDashboard";
import BlogDetail from "./pages/BlogDetail";
import DigitalTransformation from "./pages/itservices/DigitalTransformation";
import Ai from "./pages/technology/Ai";
import CaseStudy from "./pages/CaseStudy";
import Consulting from "./pages/itservices/Consulting";
import Support from "./pages/itservices/Support";
import Staffing from "./pages/itservices/Staffing";
import EDI from "./pages/itservices/EDI";
import WebDevelopment from "./pages/itservices/WebDevelopment";
import MobileAppDevelopement from "./pages/itservices/MobileAppDevelopement";
import ContactUs from "./pages/ContactUs";
import Retail from "./pages/Industries/Retail";
import Media from "./pages/Industries/Media";
import Insurance from "./pages/Industries/Insurance";
import Healthcare from "./pages/Industries/Healthcare";
import Education from "./pages/Industries/Education";
import Banking from "./pages/Industries/Banking";
import ReadMore from "./pages/ReadMore";
import ReadMoresecond from "./pages/ReadMoresecond";
import ReadMoreThird from "./pages/ReadMoreThird";
import ReadMoreFourth from "./pages/ReadMoreFourth";

function App() {
  return (
    <div className="custom-font">
      <Routes>
        <Route path={routes.home.self} element={<Home />} />
        <Route
          path={routes.home.mobileAppDevelopmetDubai}
          element={<DubaiHomePage />}
        />
        <Route path="/blog" element={<BlogDashboard />} />
        <Route path="/blog/:blogname" element={<BlogDetail />} />

        <Route path={routes.technologies.ai} element={<Ai />} />
        <Route path={routes?.home?.caseStudy?.self} element={<CaseStudy />} />
        <Route path={routes.home.aboutus} element={<Aboutus />} />
        <Route path={routes.home.contactus} element={<ContactUs />} />

        {/* # itservices */}
        <Route path={routes?.itservices?.consulting} element={<Consulting />} />
        <Route
          path={routes?.itservices?.digitaldransformation}
          element={<DigitalTransformation />}
        />
        <Route
          path={routes?.itservices?.mobileAppDevelopmet}
          element={<MobileAppDevelopement />}
        />
        <Route
          path={routes?.itservices?.webDevelopment}
          element={<WebDevelopment />}
        />
        <Route path={routes?.itservices?.edi} element={<EDI />} />
        <Route path={routes?.itservices?.staffing} element={<Staffing />} />
        <Route path={routes?.itservices?.support} element={<Support />} />

        {/* #industries */}
        <Route path={routes?.industries?.retail} element={<Retail />} />
        <Route path={routes?.industries?.media} element={<Media />} />
        <Route path={routes?.industries?.insurance} element={<Insurance />} />
        <Route path={routes?.industries?.healthcare} element={<Healthcare />} />
        <Route path={routes?.industries?.education} element={<Education />} />
        <Route path={routes?.industries?.banking} element={<Banking />} />

        <Route
          path={routes?.home?.caseStudy?.aiwarehouse}
          element={<ReadMore />}
        />
        <Route
          path={routes?.home?.caseStudy?.forexcurrency}
          element={<ReadMoresecond />}
        ></Route>
        <Route
          path={routes?.home?.caseStudy?.Development}
          element={<ReadMoreThird />}
        ></Route>
        <Route
          path={routes?.home?.caseStudy?.Innovative}
          element={<ReadMoreFourth />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
