
import './App.css';
import Navbar from "./Components/Navbar"
import CarouselComp from "./Components/CarouselComp"
import Mid from "./Components/Mid"
import LandingProducts from './Components/LandingProducts';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <CarouselComp/>
      <Mid/>
      <LandingProducts/>
    </div>
  );
}

export default App;
