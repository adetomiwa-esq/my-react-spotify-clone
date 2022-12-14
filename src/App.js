import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/my-react-spotify-clone' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;