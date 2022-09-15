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
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import PrivateRoutes from "./utilis/PrivateRoutes";
import { LoginContext } from "./Context/LoginContext";
import { useState } from "react";
function App() {
  const [loginauth, setLoginauth] = useState(false);
  console.log(loginauth);
  return (
    <LoginContext.Provider value={{ loginauth, setLoginauth }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Admin />} path="auth/kokebpension/admin" exact />
          </Route>
          <Route path="/auth/kokebpension/admin" element={<Admin />} />
          <Route path="/auth/kokebpension" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:Id" element={<Book />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/room/:Id" element={<Singleroom />}></Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
