import React from 'react'

function FarmForm({onNameChange, onCityChange, onStateChange, onUpdateFarm, name, city, state}) {
    
    return (
        <div>
            <form onSubmit={onUpdateFarm}>
                <label>Farm Name</label>
                <input onChange={onNameChange} value={name} type="text"></input>
                <label>City</label>
                <input onChange={onCityChange} value={city} type="text"></input>
                <label>State</label>
                <input onChange={onStateChange} value={state} type="text"></input>
                <button className="update-btn" type="submit">Submit</button>
            </form>
      </div>
    )
}

export default FarmForm