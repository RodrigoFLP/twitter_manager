import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";
import Navbar from "./Components/Navbar";
import Schedule from "./pages/Schedule";
import Footer from "./Components/Footer";
import Signup from "./pages/Signup";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-screen place-content-between">
      {location.pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
