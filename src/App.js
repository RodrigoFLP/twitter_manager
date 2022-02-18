import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { TweetScheduler } from "./pages/TweetScheduler";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<TweetScheduler />} />
      </Routes>
    </>
  );
}

export default App;
