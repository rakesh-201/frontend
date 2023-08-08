import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import FoodList from "./Components/FoodList";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
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
          } />
          <Route path="/login">
            <></>
          </Route>
          <Route path="/signup">
            <></>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
