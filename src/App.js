import './App.css';

import { useState, useEffect } from 'react';


function App() {
  const [dados, setDados] = useState([])
  function getDados() {
    fetch('https://teste-api-flask-5agr.onrender.com/dados')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setDados([res])
      })
  }

  useEffect(() => {
    getDados()
  }, [])

  return (
    <div className="App">
      <button onClick={getDados}>`Pegando dados</button>


   
      

      {
        dados.length === 0 ? <h1>Carregando...</h1> :

        
          dados.map((dado, n) =>
            <div key={n}>
              <p><strong>Nome:</strong> {dado.nome}</p>
              <p><strong>Apelido:</strong> {dado.apelido}</p>
              <p><strong>Pais:</strong> {dado.pais}</p>
              <p><strong>Sexo:</strong>{dado.sexo}</p>
              <p><strong>Conjugue:</strong> {dado.conjugue}</p>
            </div>
            
          )
        
      } 
    </div>
  );
}

export default App;
