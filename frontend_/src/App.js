import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home";
import MenuTable from "./components/MenuTable";
import ReservationTable from "./components/ReservationTable";
import Login from "./login";
import About from "./pages/About";
import BookTable from "./pages/BookTable";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuTable />} />
              <Route path="/reservations" element={<ReservationTable />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<BookTable />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
