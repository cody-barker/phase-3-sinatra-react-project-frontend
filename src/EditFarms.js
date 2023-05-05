import React, {useState} from 'react'
import FarmForm from './FarmForm'
import FarmSelector from './FarmSelector'

function EditFarms({ onDeleteFarm, onUpdateFarm, select, setSelect, selectBeds, setSelectBeds, selectFarm, setSelectFarm, name, setName, city, setCity, state, setState, allFarms, onFarmChange}) {

    const [newFarmName, setNewFarmName] = useState("")
    const [newFarmCity, setNewFarmCity] = useState("")
    const [newFarmState, setNewFarmState] = useState("")

    function onNameChange (e) {
        setNewFarmName(e.target.value)
    }

    function onCityChange(e) {
        setNewFarmCity(e.target.value)
    }

    function onStateChange(e) {
        setNewFarmState(e.target.value)
    }

    function addFarm (e) {
        e.preventDefault()
        fetch('http://localhost:9292/farms', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(farm)
        })
        .then(r => r.json())
        .then(farm => alert(`${farm.name} has been added to the Farm Tracker.`))
    }

    let farm = {
        name: newFarmName,
        city: newFarmCity,
        state: newFarmState
    }

    //setAllFarms([...allFarms].filter(obj => obj.name != farm.name))

    //REFACTOR FARM FORM

    return (
        <div>
            <h3>Add A Farm</h3>
            <form onSubmit={addFarm}>
                <label>Farm Name</label>
                <input type="text" value={newFarmName} onChange={onNameChange}></input>
                <label>City</label>
                <input type="text" value={newFarmCity} onChange={onCityChange}></input>
                <label>State</label>
                <input type="text" value={newFarmState} onChange={onStateChange}></input>
                <button type="submit">Add Farm</button>
            </form>

            <h3>Update a Farm</h3>
            <FarmSelector allFarms={allFarms} onFarmChange={onFarmChange}/>
            {select === "All Farms" ? null : <FarmForm onUpdateFarm={onUpdateFarm} selectBeds={selectBeds} setSelectBeds={setSelectBeds} selectFarm={selectFarm} select={select} setSelectFarm={setSelectFarm} setSelect={setSelect} name={name} setName={setName} city={city} setCity={setCity} state={state} setState={setState}/>}
            <button onClick={onDeleteFarm}>Delete Farm</button>
        </div>

        
    )
}

export default EditFarms