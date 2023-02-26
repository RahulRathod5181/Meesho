
import './App.css';
import Navbar from "./Components/Navbar"
import CarouselComp from "./Components/CarouselComp"
import Mid from "./Components/Mid"
import LandingProducts from './Components/LandingProducts';
import AllRoutes from './Components/AllRoutes';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <CarouselComp/> */}
      {/* <Mid/> */}
      {/* <LandingProducts/> */}
    </div>
  );
}

export default App;
