import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Leftcontext } from "../Context/Leftcontext";
import classe from './left.module.css'
const Subset = () => {
    const [sublink, setsublink]=useState([
        {id : 1, link: 'User', hash: 'user'},
        {id : 2, link: 'Ports', hash: 'port'},
        {id : 3, link: 'Pays', hash: 'harbour'},
        {id : 4, link: 'Villes', hash: 'down'},
        {id : 5, link: 'Bureau', hash: 'office'},
    ])
    const { islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark
    return ( 
        <div className={classe.showparams} >
            <ul>
                {
                    sublink.map(sub => {
                        return(
                            <Link style={{backgroundColor :theme.bg, color : theme.color }}  to={`/${sub.hash}`}> 
                                <li> {sub.link} </li> 
                            </Link>
             
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default Subset;