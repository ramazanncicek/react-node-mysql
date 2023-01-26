import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import EditBox from "./components/EditBox";
import SelectBox from "./components/SelectBox";
import './App.css';
import {useEffect} from 'react';
import axios from 'axios';
function App() {
  let data1 = document.getElementsByTagName('option');
  useEffect(()=>{
    logAllSectors();
  },[data1])
  function logAllSectors(){
    let sectorPackage = {};
    for(let prop of data1){
        let sectorName = String(prop.innerHTML.replace(/&nbsp;/g, '').replace(/&amp;/g,'&'));
        let sectorValue = Number(prop.value);
        sectorPackage[sectorName] = sectorValue;   
    }
    axios.post('http://localhost:3001/postsectors',sectorPackage);
    }
  return (
    <BrowserRouter>
    <div className="App">
    <section className="nav-bar">
    <h2><Link to="/">Sectors</Link></h2>
    <h2><Link to="/editbox">Edit Sectors</Link></h2>
    </section>

      <Routes>
                      <Route exact path="/" element={<SelectBox/>}/>
                      <Route path="/editbox" element={<EditBox />}/>
      </Routes>

      

    </div>
    </BrowserRouter>
  );
}

export default App;
