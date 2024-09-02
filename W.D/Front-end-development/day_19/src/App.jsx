
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='text-3xl font-bold underline mb-4'>Shail's work</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App