import React from 'react'

function FarmForm({ onUpdateFarm, setSelectBeds, selectFarm, setSelectFarm, select, setSelect, name, setName, city, setCity, state, setState}) {

    function onNameChange(e) {
        setName(e.target.value)
    }
    
    function onCityChange(e) {
        setCity(e.target.value)
    }

    function onStateChange(e) {
        setState(e.target.value)
    }
    
    // function copyFarm(e) {
    //     e.preventDefault()
    //     setName(selectFarm.name)
    //     setCity(selectFarm.city)
    //     setState(selectFarm.state)
    // }
    
    return (
        <div>
            <form onSubmit={onUpdateFarm}>
                <label>Farm Name</label>
                <input onChange={onNameChange} value={name} type="text"></input>
                <label>City</label>
                <input onChange={onCityChange} value={city} type="text"></input>
                <label>State</label>
                <input onChange={onStateChange} value={state} type="text"></input>
                <h3>{select === "All Farms" ? null : <button className="update-btn" type="submit">Update Farm</button>} </h3>
        </form>
      </div>
    )
}

export default FarmForm