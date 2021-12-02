import React from 'react';
import StickyHeadTable from '../components/StickyHeadTable';
import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Topright from "../components/Topright";
import FloatingActionButtons from '../components/FloatingActionButtons';


const VillesContext = () => {
    return (
        <div className='app'>
        <AuthContextProvider>
            <LeftContextProvider>
                <Leftside />
                <div className="param-top">
                    <Topright/>
                </div>
                <div className="parametrage">
                    <h1>LISTE DES VILLES</h1>
                    <StickyHeadTable/>
                    <FloatingActionButtons/>
                </div>
                
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
    );
};

export default VillesContext;