import { useState } from 'react'
import Indexcomponent from './indexcomponent'
import Blogcomponent from './blogcomponent'
import Aboutuscomponent from './aboutuscomponent'
import Formbooking from './form'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Indexcomponent/>}/>
      <Route path='/blog' element={<Blogcomponent/>}/>
      <Route path='/aboutus' element={<Aboutuscomponent/>}/>
      <Route path='/booking' element={<Formbooking/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
