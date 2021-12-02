import React from 'react';
import AuthContextProvider from './AuthContext';
import LeftContextProvider from './Leftcontext';
import Leftside from '../components/Leftside';
import Homepage from '../components/Homepage';

const HomeContext = () => {
    return (
        
        <div className='app'>
        <AuthContextProvider>
            <LeftContextProvider>
                <Leftside />
                <Homepage />
            </LeftContextProvider>
        </AuthContextProvider>
      </div>
        
    );
};

export default HomeContext;