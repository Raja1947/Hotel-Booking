import { Route, Routes } from 'react-router-dom';
import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';

function App() {
  
  const isOwnerPath = window.location.pathname.includes('owner');

  return (
   <>
   <div>
    {!isOwnerPath && <Navbar/>}
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
    
   </div>
   
   </>
  )
}

export default App
