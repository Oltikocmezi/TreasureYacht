import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Display from "./Pages/Display";
import Home from "./Pages/Home";
import Yacht from "./Pages/Yacht";
import Events from "./Pages/Events";
import YachtClub from "./Pages/YachtClub";
import Commitment from "./Pages/Commitment";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename="/TreasureYacht"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Yacht" element={<Yacht />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/YachtClub" element={<YachtClub />} />
          <Route path="/Commitment" element={<Commitment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
