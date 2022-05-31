import './App.css';
import DisplayApi from './components/DisplayApi';
import Homepage from './components/Homepage';
import DetailMeal from './components/Detail';
import { BrowserRouter,Routes, Route,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/meals" element={<DisplayApi/>}/>
          <Route path="/detail" element={<DetailMeal/>}/>
          <Route path="/detail/:id" element={<DetailMeal/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
