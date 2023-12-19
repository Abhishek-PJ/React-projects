import Layout from "./Layout";
import Login from "./Pages/Login";
import Logincontextprovider from "./Context/Logincontextprovider";


function App() {

  return (
   <Logincontextprovider >
    <Layout/>
    <Login/>
    </Logincontextprovider>

  );
}

export default App;
