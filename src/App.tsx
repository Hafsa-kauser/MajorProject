import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/features/FeatureSection";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import Docs from "./Docs";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
     
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeatureSection />
              <Cta />
              <Footer />
            </>
          }
        />

        
        <Route path="/Docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
