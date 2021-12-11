import React from 'react';
import StickyHeadTable from '../components/StickyHeadTable';
import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Topright from "../components/Topright";
import FloatingActionButtons from '../components/FloatingActionButtons';
import TableInter from '../components/TableInter';
import Usersform from '../components/form/Usersform';
import TableBureau from '../components/tables/TableBureau';

const BureauContext = () => {
    return (
         <div className='app'>
        <AuthContextProvider>
            <LeftContextProvider>
                <Leftside />
                <div className="param-top">
                    <Topright/>
                </div>
                <div className="parametrage">
                    <h1>LISTE DES BUREAUX</h1>
                    <TableBureau/>
                </div>
                
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
    );
};

export default BureauContext;