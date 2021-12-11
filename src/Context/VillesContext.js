import React from 'react';

import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Topright from "../components/Topright";
import FloatingActionButtons from '../components/FloatingActionButtons';

import TableVille from '../components/tables/TableVille';


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
                    <TableVille/>
                    
                </div>
                
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
    );
};

export default VillesContext;