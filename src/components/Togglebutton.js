import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';
import toggle from './toggle.module.css'
const Togglebutton = () => {
    const {changetheme} = useContext(Leftcontext)
    return ( 
        // <div className={toggle.toggle} onClick={changetheme} >
        //     <div className={toggle.circle} ></div>
        // </div>
        <label className={toggle.switch}>
            <input type='checkbox'  onClick={changetheme} />
            <span className={toggle.slider}></span>
        </label>
     );
}
 
export default Togglebutton;