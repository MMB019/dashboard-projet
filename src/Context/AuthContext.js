import { createContext, useReducer } from "react";
import { Authreducer } from "./Authreducer";


export const AuthContext = createContext()

const AuthContextProvider = props => {
    const [auth, dispatch] = useReducer(Authreducer, [
        {id : 1, name :'Bangoura', firstname: 'Ibrahima Diallo', username : '...', password : '', status : 'Admin'}
    ])
    return ( 
        <AuthContext.Provider value={{auth, dispatch}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;