import React from 'react'

function FarmForm({onUpdateFarm, select, name, setName, city, setCity, state, setState}) {

    function onNameChange(e) {
        setName(e.target.value)
    }
    
    function onCityChange(e) {
        setCity(e.target.value)
    }

    function onStateChange(e) {
        setState(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onUpdateFarm}>
                <label>Farm Name</label>
                <input onChange={onNameChange} value={name} type="text"></input>
                <label>City</label>
                <input onChange={onCityChange} value={city} type="text"></input>
                <label>State</label>
                <input onChange={onStateChange} value={state} type="text"></input>
                {select === "All Farms" ? null : <button className="update-btn" type="submit">Update Farm</button>}
        </form>
      </div>
    )
}

export default FarmForm