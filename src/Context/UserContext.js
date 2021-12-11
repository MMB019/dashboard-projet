import React from 'react';

import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Topright from "../components/Topright";
import FloatingActionButtons from '../components/FloatingActionButtons';
import TableInter from '../components/TableInter';
import Usersform from '../components/form/Usersform';
import TableUser from '../components/tables/TableUser';


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
                    <TableUser/>
                    

                </div>
                
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
    );
};

export default UserContext;