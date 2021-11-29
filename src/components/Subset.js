import { useContext } from "react";
import { Link } from "react-router-dom";
import { Leftcontext } from "../Context/Leftcontext";
import classe from './left.module.css'
const Subset = () => {
    
    const { islight, light, dark, sublink, setsublink} = useContext(Leftcontext)
    const theme = islight ? light : dark
    const setactiftosublink = id => {
        setsublink(sublink.map(sub => sub.id === id ? {...sub, actif: true} : {...sub, actif : false}))
    }
    return ( 
        <div className={classe.showparams} >
            <ul>
                {
                    sublink.map(sub => {
                        return(
                            <Link style={{backgroundColor :theme.bg, color : theme.color }}  to={`/${sub.hash}`}> 
                                <li onClick={()=>setactiftosublink(sub.id)} className={sub.actif && classe.actif}> {sub.link} </li> 
                            </Link>
             
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default Subset;