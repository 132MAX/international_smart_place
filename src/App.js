import Home from "./component/home/Home"
import What from "./component/what/What"
import Banner from "./component/banner/Banner"
import Menu from "./component/menu/Menu"
import "./reset.css"

function App() {
  return (
    <div className="App">
      <div className="menuFixed"><Menu/></div> 
      <Home/>
      <What/>
      <Banner/>
    </div>
  );
}

export default App;
