import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Youtube from "./components/Youtube/Youtube";
import About from "./pages/About/About";
import Rooms from "./pages/Rooms/Rooms";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
