import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import OurListing from "./pages/OurListing";
import LocalListing from "./pages/LocalListing";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import OurTeam from "./pages/OurTeam/our-team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/local-listings" element={<LocalListing />} />
          <Route path="/our-listings" element={<OurListing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
