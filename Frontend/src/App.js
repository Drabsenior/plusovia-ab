import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Youtube from "./components/Youtube/Youtube";
import About from "./pages/About/About";
import Rooms from "./pages/Rooms/Rooms";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Singleroom from "./components/Singleroom/Singleroom";
import ScrollToTop from "./ScrollTop";
import Book from "./components/Book/Book";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/book/:Id" element={<Book />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/room/:Id" element={<Singleroom />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
