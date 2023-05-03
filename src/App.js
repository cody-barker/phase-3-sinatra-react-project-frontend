import './App.css';
import TableRow from './TableRow'
import React, { useState, useEffect } from 'react';

function App() {

  let [select, setSelect] = useState("All Farms")
  let [allFarms, setAllFarms] = useState([])
  let [allBeds, setAllBeds] = useState([])
  let [selectFarm, setSelectFarm] = useState({})
  let [selectBeds, setSelectBeds] = useState([])

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
    if (e.target.value === "All Farms") {
      setSelect("All Farms")
      setSelectFarm([...allFarms])
      setSelectBeds([...allBeds])
    } else {
    setSelect(e.target.value)
    setSelectFarm([...allFarms].find(farm => e.target.value === farm.name))
    setSelectBeds([...allBeds].filter(bed => e.target.value === bed.farm.name))
    }
  }

  const allBedComps = [...allBeds].map(bed => <TableRow bed={bed} key={bed.id}/>)
  const selectBedComps = [...selectBeds].map(bed => <TableRow bed={bed} key={bed.id}/>)

  console.log(selectFarm)
  console.log(selectBeds)
  console.log(select)

  return (
    <div className="App">
      <h1>Farm Tracker</h1>
      <select onChange={(e) => {
        onFarmChange(e)
        
      }}>
        <option>All Farms</option>
        {allFarms.map(farm => <option>{farm.name} </option>)}
      </select>

      <h3>{select === "All Farms" ? null : <button>Edit Farm</button>} </h3>
      
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
          {select === "All Farms" ? allBedComps : selectBedComps}
        </tbody>
      </table>
    </div>
  );
}

export default App;
