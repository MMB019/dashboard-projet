import React from 'react';
import StickyHeadTable from '../components/StickyHeadTable';
import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Topright from "../components/Topright";
import FloatingActionButtons from '../components/FloatingActionButtons';


const UserContext = () => {
    
    return (
       <div className='app'>
        <AuthContextProvider>
            <LeftContextProvider>
                <Leftside />
                <div className="param-top">
                    <Topright/>
                </div>
                <div className="parametrage">
                    <h1>LISTE DES UTILISATEURS</h1>
                    <StickyHeadTable/>
                    <FloatingActionButtons/>
                </div>
                
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
    );
};

export default UserContext;