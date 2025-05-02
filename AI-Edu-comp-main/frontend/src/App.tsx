import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ComputerNetworking from "./pages/ComputerNetworking";
import Oops from "./pages/Oops";
import Dbms from "./pages/Dbms";
import Os from "./pages/Os";
import Dsa from "./pages/Dsa";
import Aiml from "./pages/Aiml";
import CyberSecurity from "./pages/CyberSecurity";
import CandCpp from "./pages/CAndCpp";
import { AiExpert as AiExpertPage } from "./pages/AiExpertPage";
import Iot from "./pages/Iot";
import ComputerArchitecture from "./pages/AdvanceArc";
import CloudComputing from "./pages/CloudComputing";
import DataScienceExpert from "./pages/DataScAn";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai-expert" element={<AiExpertPage />} />
        <Route path="/computer-networking" element={<ComputerNetworking />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/dbms" element={<Dbms />} />
        <Route path="/os" element={<Os />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/aiml" element={<Aiml />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/c-&-cpp" element={<CandCpp />} />
        <Route path="/iot" element={<Iot />} />
        <Route path="/computer-architecture" element={<ComputerArchitecture />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/data-science" element={<DataScienceExpert />} />
      </Routes>
    </Router>
  );
}

export default App;
