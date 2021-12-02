import { BrowserRouter , Switch, Route } from "react-router-dom";

import '../node_modules/font-awesome/css/font-awesome.min.css'

import './App.css'
import HomeContext from "./Context/HomeContext";
import NotFoundContext from "./Context/NotFoundContext"
import UserContext from "./Context/UserContext";
import PortContext from "./Context/PortContext";



const App = () => {
  return (
    
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeContext} />
        <Route path="/home" exact component={HomeContext} />
        <Route path="/user" exact component={UserContext} />
        <Route path="/port" exact component={PortContext} />
        <Route path="/" exact component={HomeContext} />
        <Route component={NotFoundContext} />
      </Switch>
    </BrowserRouter>
    
    
   );
}
 
export default App;