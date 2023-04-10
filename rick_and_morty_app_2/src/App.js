// import characters from './data';
import './App.css';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Cards from './Components/Cards/Cards'
import About from './Components/About/About'
import Detail from './Components/Detail/Detail'
import { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  
  const onSearch=(id) => {
    const URL_BASE= "https://be-a-rym.up.railway.app/api";
    const KEY = "6efd8a9f97d1.f082998d50a70b22d308";
    
    if (characters.find((char) => char.id === id)){
      return alert("El personaje se repite")
    }
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then (response => response.json())
    .then(data=>{
      if (data.name) {
        setCharacters((oldChars)=>[...oldChars, data]);        
      } else {
        alert("Algo salió mal...")
      }
    });
  };
  const [characters, setCharacters] = useState([]);
  
  function onClose(id){
    setCharacters (characters.filter (personaje => personaje.id !== id))
    console.log(id);
  }
  
  return (
    <div className="App">
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element = {<Form />} />
        <Route path='/home' element= {<Cards characters= {characters}  onClose={onClose} />} />
        <Route path='/about' element= {<About />} />
        <Route path='/detail/:detailId' element= {<Detail />} />
      </Routes> 
    </div>
    
  );
}

export default App;
