import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import EditFarms from './EditFarms'
import React, {useState, useEffect} from 'react'
import TableRow from './TableRow'

function App() {

/**
 * APP STRUCTURE
 * 
 * App
 *    Home
 *    Edit Farms
 *      Selector
 *      Farm Form
 */

  let [allFarms, setAllFarms] = useState([])
  let [allBeds, setAllBeds] = useState([])
  let [select, setSelect] = useState("All Farms")
  let [selectFarm, setSelectFarm] = useState({})
  let [selectBeds, setSelectBeds] = useState([])
  let [name, setName] = useState("")
  let [city, setCity] = useState("")
  let [state, setState] = useState("")

  useEffect(() => {
    fetch("http://localhost:9292/farms")
    .then(r => r.json())
    .then(farms => setAllFarms(farms))
  },[select, selectFarm])

  useEffect(() => {
    fetch("http://localhost:9292/beds")
    .then(r => r.json())
    .then(beds => setAllBeds(beds))
  },[allFarms])

  const allBedComps = [...allBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)
  
  const selectBedComps = [...selectBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)

  let farm = {
    name: name,
    city: city,
    state: state
}

  function onNameChange(e) {
    setName(e.target.value)
  }
  
  function onCityChange(e) {
    setCity(e.target.value)
  }
  
  function onStateChange(e) {
    setState(e.target.value)
  }

  function findFarm(e){
    return [...allFarms].find(farm => e.target.value === farm.name)

  }

  function onFarmChange(e){
    if (e.target.value === "All Farms") {
      setSelect("All Farms")
      setSelectFarm([...allFarms])
      setSelectBeds([...allBeds])
      setName("")
      setCity("")
      setState("")
    } else {
      setSelect(e.target.value)
      setSelectFarm(findFarm(e))
      setSelectBeds([...allBeds].filter(bed => e.target.value === bed.farm.name))
      setName(findFarm(e).name)
      setCity(findFarm(e).city)
      setState(findFarm(e).state)
    }
  }

  function onAddFarm (e) {
    e.preventDefault()
    fetch('http://localhost:9292/farms', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(farm)
    })
    .then(r => r.json())
    .then(farm => {
      setAllFarms([...allFarms, farm])
      setSelect("All Farms")
      alert(`${farm.name} has been added to the Farm Tracker.`)})
}

  function onUpdateFarm(e) {
    e.preventDefault()
    fetch(`http://localhost:9292/farms/${selectFarm.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(farm)
    })
    .then(r =>r.json())
    .then(farm => {
        setSelectFarm(farm)
        setName(farm.name)
        setCity(farm.city)
        setState(farm.state)
        setSelect("All Farms")
        setSelectBeds(farm.beds)
        alert(`${name} updated!`)
    })
}

function onDeleteFarm() {
  fetch(`http://localhost:9292/farms/${selectFarm.id}`, {
      method: "DELETE"
  })
  .then(r => r.json())
  .then(farm => {
        setAllFarms([...allFarms].filter(obj => obj.id != farm.id))
        setSelectFarm({})
        setSelect("All Farms")
        alert(`${farm.name} removed from Farm Tracker.`)
  })
}

  return (
    <div className = "app">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home allFarms={allFarms} onFarmChange={onFarmChange} select={select} selectFarm={selectFarm} allBedComps={allBedComps} selectBedComps={selectBedComps}/>
          </Route>
          <Route path ="/editfarms">
            <EditFarms onNameChange={onNameChange} onCityChange={onCityChange} onStateChange={onStateChange} onAddFarm={onAddFarm} onDeleteFarm={onDeleteFarm} setAllFarms={setAllFarms} farm={farm} onUpdateFarm={onUpdateFarm} onFarmChange={onFarmChange} allFarms={allFarms} name={name} setName={setName} city={city} setCity={setCity} state={state} setState={setState} select={select} setSelect={setSelect} selectFarm={selectFarm} setSelectFarm={setSelectFarm} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
