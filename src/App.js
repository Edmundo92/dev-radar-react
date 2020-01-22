import React, { useState ,useEffect } from 'react';
import axios from 'axios';

import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

const URL = 'http://localhost:3004/devs';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    
    const response = await axios.post(URL, {data});

    setDevs([...devs, response.data])
  }

  async function loadDevs() {
    const response  = await axios.get(URL);
    setDevs(response.data)
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {
            devs.map((dev) => {
              return (
                <DevItem key={dev.id} dev={dev} />
              )
            })
          }
        </ul>
      </main>
    </div>
  ); 
}

export default App;
