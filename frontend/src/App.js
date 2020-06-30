import React,{useEffect, useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import Axios from "axios";
const url = "http://localhost/tech_challenge/backend/controllers/ReadArgonautes.action.php";

const App = () => {
  const [argonautes,setArgonautes] = useState([]);
  const arr = [];

  const newArgonaute = (argonaute) => {
    const arr = [...argonautes];
    arr.push(argonaute);
    setArgonautes(arr);
  }
 
  useEffect(() => {
    Axios.get(url)
    .then((response) =>{
        for(let i = 0; i < response.data.length; i++){
            arr[i] = response.data[i].name
        }
        setArgonautes(arr);
    })
    .catch(function(err){
        console.log(err);
    })
    },[]);
  
  return (
    <div className="App container-fluid col-md-10 col-12">
     
        <header>
          <h1>
            <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
            Les Argonautes
          </h1>
        </header>
        <main>
          <Form  addNewArgonaute={newArgonaute}/>
          <List argonautes={argonautes}/>
      </main>
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
 
}

export default App;
