import React, { useState } from "react";
import api from "./utils/api";
import { BsStarFill } from 'react-icons/bs';
import './App.css';


function App() {
  const [repositories, setRepositories] = useState();
  const [user, setUser] = useState();

  function findRepositories(userToFind) {
     api
      .get(`users/${userToFind}/repos`)
      .then((response) =>setRepositories(response.data))
      .catch((err) => {
        alert("Usuário não encontrado");
    });
  };
 
  return (
    <div className="container">
      <div className="search">
        <label>Digite seu usuário do git: </label>
        <input type="text" onChange={(e) => setUser(e.target.value)}/>
        <button type="button" onClick={() =>findRepositories(user)} >Enviar!</button>
      </div>
      
      <div className="aa">
        {repositories?.map((repo) =>(
          <div key={repo.id} className="content">
            <p>{repo?.name} </p>        
            <p><BsStarFill/> {repo?.stargazers_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
