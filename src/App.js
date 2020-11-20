import Home from "./component/home/Home"
import What from "./component/what/What"
import Banner from "./component/banner/Banner"
import Menu from "./component/menu/Menu"
import During from "./component/during/During"
import BannerTwo from "./component/bannerTwo/BannerTwo"
import UndergoingTraning from "./component/undergoingTraining/UndergoingTraining"
import Stages from "./component/stages/Stages"
import Benefits from "./component/benefits/Benefits"
import Teachers from "./component/teachers/Teachers"
import "./reset.css"

function App() {
  
  return (
    <div className="App">
      <Home/>
      <div className="menuFixed"><Menu/></div> 
      <What/>
      <Banner/>
      <During/>
      <BannerTwo/>
      <UndergoingTraning/>
      <Stages/>
      <Benefits/>
      <Teachers/>
    </div>
  );
}

export default App;
