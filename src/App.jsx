import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  const isOwnerPath = window.location.pathname.includes('/owner');

  return (
   <>
   <div>
    {!isOwnerPath && <Navbar/>}
   </div>
   
   </>
  )
}

export default App
