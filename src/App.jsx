import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WestlandUni from "./pages/WestlandUni";
import CoursesPage from "./pages/CoursesPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PreciousConerstone from "./pages/PreciousConerstone";
import PcuCourse from "./pages/PcuCourse";
import Conans from "./pages/Conans";
import Comas from "./pages/Comas";
import Cobmahs from "./pages/Cobmahs";
import PcuPassa from "./pages/PcuPassa";
import PcuSms from "./pages/PcuSms";
import NotFound from "./components/NotFound";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/universities/westland-university"
          element={<WestlandUni />}
        />
        <Route
          path="/universities/preciousconerstone-university"
          element={<PreciousConerstone />}
        />
        <Route path="/courses/:collegeSlug" element={<CoursesPage />} />
        <Route path="/courses/:pcuSlug" element={<PcuCourse />} />
        <Route path="/conas" element={<Conans />} />
        <Route path="/comas" element={<Comas />} />
        <Route path="/cobmahs" element={<Cobmahs />} />
        <Route path="/pcu/passa" element={<PcuPassa />} />

        <Route path="/pcu/fama" element={<PcuSms />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
