import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  let [allFarms, setAllFarms] = useState([])
  let [allBeds, setAllBeds] = useState([])
  let [farm, setFarm] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/farms")
    .then(r => r.json())
    .then(farms => setAllFarms(farms))
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/beds")
    .then(r => r.json())
    .then(beds => setAllBeds(beds))
  },[])

  function onFarmChange(e){
    setFarm(e.target.value)
  }

  return (
    <div className="App">
      <h1>Farm Tracker</h1>
      <select onChange={onFarmChange}>
        {allFarms.map(farm => <option>{farm.name} </option>)}
      </select>
      <h3><button>Edit</button> </h3>
      
      <table>
        <thead>
          <tr>
            <th>Bed ID</th>
            <th>Sq Ft</th>
            <th>In Use</th>
            <th>Crop</th>
            <th>DTM</th>
            <th>Planting Date</th>
            <th>Harvest Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>60</td>
            <td>Yes</td>
            <td>Radishes</td>
            <td>29</td>
            <td>04-01-23</td>
            <td>4-30-23</td>
            <td><button>X</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
