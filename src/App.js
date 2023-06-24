import React from 'react'
import  {Routes, Route} from 'react-router-dom'



//Pages
import Home from './Routes/Home'
import InternetArt from "./Routes/InternetArt"

function App() {
  return (
    <>
    <Routes>

      <Route path='/'element={<Home/>} />
      <Route path='/internetart'element={<InternetArt/>} />

    </Routes>
     
    </>
  );
}

export default App;
