import { NavBar } from "./components/layout/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
/*import {Home} from './components/home/Home';*/
import MaterialUI from "./components/materialUI/MaterialUI";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import { Badge } from "@mui/material";
//import ItemList from "./components/itemListContainer/ItemList";

function App() {
  //let nombre = "Luna";

  return (
    <>
      <NavBar />
      <MaterialUI />
      <ItemListContainer nombre={nombre} x={true} />
      <CounterContainer stock={10} />
      <CounterContainer stock={5} />
      <CounterContainer stock={7} />
<Badge/>

      <Footer />
    </>
  );
}

export default App;
