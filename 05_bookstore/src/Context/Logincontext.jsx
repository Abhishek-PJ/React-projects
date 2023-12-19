// Logincontext.js
import { createContext } from 'react';

const Logincontext = createContext({ setuser: () => {}, user: '' });

export default Logincontext;
