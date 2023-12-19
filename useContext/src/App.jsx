import './App.css'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider> 
  )
}

export default App
