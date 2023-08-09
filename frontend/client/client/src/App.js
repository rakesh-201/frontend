import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar1 from "./Components/Navbar1";
import Carousel from "./Components/Carousel";
import FoodList from "./Components/FoodList";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Table from "./Components/Table";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Table from "./Components/Table";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="container mb-5">
                  <Carousel />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Card />
                  </div>
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar1 />
                <Dashboard />
              </>
            }
          />
          <Route
            path="/bond"
            element={
              <>
                <Navbar1 />
                <Table />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Navbar1 />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
