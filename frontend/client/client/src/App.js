import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import FoodList from "./Components/FoodList";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default App;
