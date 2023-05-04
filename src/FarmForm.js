import React, {useState} from 'react'

function FarmForm() {

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

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
        <form autoComplete="off">
            <input onChange={onNameChange} value={name} type="text" placeholder="Farm Name"></input>
            <input onChange={onCityChange} value={city} type="text" placeholder="City"></input>
            <input onChange={onStateChange} value={state} type="text" placeholder="State"></input>
            <button type="submit">Submit Changes</button>
      </form>
    )
}

export default FarmForm