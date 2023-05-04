import TableRow from './TableRow'
import React, { useState, useEffect } from 'react';
import FarmForm from './FarmForm'

function Home () {

    let [select, setSelect] = useState("All Farms")
    let [allFarms, setAllFarms] = useState([])
    let [allBeds, setAllBeds] = useState([])
    let [selectFarm, setSelectFarm] = useState({})
    let [selectBeds, setSelectBeds] = useState([])
    let [name, setName] = useState("")
    let [city, setCity] = useState("")
    let [state, setState] = useState("")
  
    useEffect(() => {
      fetch("http://localhost:9292/farms")
      .then(r => r.json())
      .then(farms => setAllFarms(farms))
    },[selectFarm])
  
    useEffect(() => {
      fetch("http://localhost:9292/beds")
      .then(r => r.json())
      .then(beds => setAllBeds(beds))
    },[selectBeds])
  
    function findFarm(e){
      return [...allFarms].find(farm => e.target.value === farm.name)
    }
  
    function onFarmChange(e){
      if (e.target.value === "All Farms") {
        setSelect("All Farms")
        setSelectFarm([...allFarms])
        setSelectBeds([...allBeds])
      } else {
      setSelect(e.target.value)
      setSelectFarm(findFarm(e))
      setSelectBeds([...allBeds].filter(bed => e.target.value === bed.farm.name))
      setName(findFarm(e).name)
      setCity(findFarm(e).city)
      setState(findFarm(e).state)
      }
    }
  
    const allBedComps = [...allBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)
    const selectBedComps = [...selectBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)
  
    // console.log(selectFarm)
    // console.log(selectBeds)
    // console.log(select)

    return(
        <div className="App">
      <h1>Farm Tracker</h1>

      <select onChange={onFarmChange}>
        <option>All Farms</option>
        {allFarms.map(farm => <option key={farm.id}>{farm.name}</option>)}
      </select>

      <h4>{select === "All Farms" ? null : `${selectFarm.city}, ${selectFarm.state}`}</h4>

      {select === "All Farms" ? null : <FarmForm selectFarm={selectFarm} select={select} setSelectFarm={setSelectFarm} setSelect={setSelect} name={name} setName={setName} city={city} setCity={setCity} state={state} setState={setState}/>}
      
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
    )
}

export default Home