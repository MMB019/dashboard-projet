import { BrowserRouter , Switch, Route } from "react-router-dom";

import '../node_modules/font-awesome/css/font-awesome.min.css'

import './App.css'
import HomeContext from "./Context/HomeContext";
import NotFoundContext from "./Context/NotFoundContext"
import UserContext from "./Context/UserContext";
import PortContext from "./Context/PortContext";
import PaysContext from "./Context/PaysContext";
import VillesContext from "./Context/VillesContext";
import BureauContext from "./Context/BureauContext";

import TableInter from "./components/TableInter";



const App = () => {
  return (
    
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContext} />
        <Route path="/home" exact component={HomeContext} />
        <Route path="/user" exact component={UserContext} />
        <Route path="/port" exact component={PortContext} />
        <Route path="/pays" exact component={PaysContext} />
        <Route path="/villes" exact component={VillesContext} />
        <Route path="/bureaux" exact component={BureauContext} />
        
        <Route path="/table" exact component={TableInter} />
        <Route component={NotFoundContext} />
      </Switch>
    </BrowserRouter>
    
    
   );
}
 
export default App;