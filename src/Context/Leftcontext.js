import { createContext, useContext, useState } from "react";


export const Leftcontext = createContext()


const LeftContextProvider = props=> {
    const [showsubparm, setoutputparm] = useState(false)

    //change theme either darken the theme or lighten the theme
    const [islight , settheme] = useState(true)
    const light = {
        bg : '#fefefe',
        color: '#222',
        ui : '#efefef',
        chart : '#fefefe'
    }
    const dark = {
        bg : '#222',
        color : '#fff',
        ui : '#3f3f3f',
        chart : 'rgb(60, 63, 72)'
    }


    //make some theme tweaks
    const changetheme = ()=> {
        settheme(!islight)
    }
//fade in the output 
const outputsubparm = ()=> {
    setoutputparm(!showsubparm)
}
// post some articles
const [article, setarticle] = useState([
    {id: 1, num : '199', name :'navires',icon:"fa fa-ship", color : '#7fffd4', ink : '#008000'},
    {id: 2, num : '1000', name :'articles',icon:"fa fa-file-excel-o", color :'#00bfff', ink : '#3311a1'},
    {id: 3, num : '250', name :'Armateurs',icon:"fa fa-sitemap", color :"#ffe4c4", ink : '#daa520'}
])

// all the links
const [link, setlink] = useState([
    {id:1, hash : 'Home', font : 'fa fa-home',href:'home'},
    {id:2, hash : 'Situation portière', font : 'fa fa-anchor', href:'situation'},
    {id:3, hash : 'Cumul', font : 'fa fa-file-excel-o', href:'accrued'},
    {id:4, hash : 'Suivis des marchandises', font :'fa fa-map-marker ', href:'invigilate'},
    {id:5, hash : 'Parmetrage', font : 'fa fa-cog', href:'setting'}
])
/***************sublink************** */
const [sublink, setsublink]=useState([
    {id : 1, link: 'User', hash: 'user'},
    {id : 2, link: 'Ports', hash: 'port'},
    {id : 3, link: 'Pays', hash: 'pays'},
    {id : 4, link: 'Villes', hash: 'villes'},
    {id : 5, link: 'Bureau', hash: 'bureaux'},
])




return (
    <Leftcontext.Provider value={{showsubparm, outputsubparm, islight, changetheme, light, dark, article, setarticle, link, setlink, sublink, setsublink}}>
        {props.children}
    </Leftcontext.Provider>
    )
}

export default LeftContextProvider;