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
 */

  let [allFarms, setAllFarms] = useState([])
  let [select, setSelect] = useState("All Farms")
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


  const allBedComps = [...allBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)
  const selectBedComps = [...selectBeds].map(bed => <TableRow bed={bed} key={bed.id} allBeds={allBeds} setAllBeds={setAllBeds} selectBeds={selectBeds} setSelectBeds={setSelectBeds}/>)

  // console.log(selectFarm)
  // console.log(selectBeds)
  // console.log(select)

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

  return (
    <div className = "app">
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home allFarms={allFarms} onFarmChange={onFarmChange} select={select} selectFarm={selectFarm} allBedComps={allBedComps} selectBedComps={selectBedComps}/>
          </Route>
          <Route path ="/editfarms">
            <EditFarms onFarmChange={onFarmChange} allFarms={allFarms}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
