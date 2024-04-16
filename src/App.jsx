import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />

      {/* o outlet é onde os restantes das rotas em main.jsx estão sendo chamadas*/}
      <Outlet />
    </div>
  )
}

export default App
