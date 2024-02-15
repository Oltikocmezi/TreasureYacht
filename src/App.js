import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Display from "./Pages/Display";
import Home from "./Pages/Home";
import Yacht from "./Pages/Yacht";
import Events from "./Pages/Events";
import YachtClub from "./Pages/YachtClub";
import About from "./Pages/About";
import Commitment from "./Pages/Commitment";
import MembershipContent from "./components/Membership/MembershipContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Yacht" element={<Yacht />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/YachtClub" element={<YachtClub />} />
          <Route path="/About" element={<About BackHome="-Home-" />} />
          <Route path="/Commitment" element={<Commitment />} />
          <Route path="/Membership" element={<MembershipContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
