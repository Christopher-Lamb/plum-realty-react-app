import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import OurListing from "./pages/OurListing";
import LocalListing from "./pages/LocalListing";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import OurTeam from "./pages/OurTeam/our-team";
import House from "./pages/House";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/local-listings">
            <Route path="" element={<LocalListing />} />
            <Route path=":id" element={<House />} />
          </Route>
          <Route path="/our-listings">
            <Route path="" element={<OurListing />} />
            <Route path=":id" element={<House />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
