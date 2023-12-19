// Logincontextprovider.js
import React, { useState } from 'react';
import Logincontext from './Logincontext';

const Logincontextprovider = ({ children }) => {
  const [user, setuser] = useState('');

  const contextValue = { setuser, user };
  console.log('User in context provider:', user);


  return (
    <Logincontext.Provider value={contextValue}>
      {children}
    </Logincontext.Provider>
  );
};

export default Logincontextprovider;
