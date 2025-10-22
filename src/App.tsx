

import Navbar from "./components/Navbar"; // correct relative path
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/features/FeatureSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />   {/* This renders your Navbar at the top */}
      <main>
        <h1 className="text-2xl text-white"></h1>
        {/* Other content goes here */}
<HeroSection/>
<FeatureSection/>
<Footer/>
      </main>
    </div>
  );
}

export default App;
