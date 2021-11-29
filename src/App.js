import { BrowserRouter as Router, Swictch, Route } from "react-router-dom";
import Leftside from "./components/Leftside";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import LeftContextProvider from "./Context/Leftcontext";
import Homepage from "./components/Homepage";
import './App.css'
import AuthContextProvider from "./Context/AuthContext";
const App = () => {
  return (
    <Router>
      <div className='app'>
       <AuthContextProvider>
        <LeftContextProvider>
            <Leftside />
            <Homepage />
        </LeftContextProvider>
        </AuthContextProvider>
      </div>
    </Router> 
    
   );
}
 
export default App;