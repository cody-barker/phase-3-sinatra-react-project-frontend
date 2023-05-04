import React, {useState} from 'react'

function FarmForm({selectFarm, select, setSelectFarm, setSelect}) {

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    let update = {
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

    function onUpdateFarm(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/farms/${selectFarm.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(r =>r.json())
        .then(farm => {
            setSelectFarm(farm)
            setSelect(farm.name)
            setName(farm.name)
            setCity(farm.city)
            setState(farm.state)
        })
    }
    
    function copyFarm(e) {
        e.preventDefault()
        setName(selectFarm.name)
        setCity(selectFarm.city)
        setState(selectFarm.state)
    }
    
    return (
        <div>
            
            <form onSubmit={onUpdateFarm}>
                <input onChange={onNameChange} value={name} type="text"></input>
                <input onChange={onCityChange} value={city} type="text"></input>
                <input onChange={onStateChange} value={state} type="text"></input>
                <h3>{select === "All Farms" ? null : <button onClick={copyFarm}>Copy Farm Data</button>} </h3>
                <button type="submit">Update</button>
        </form>
      </div>
    )
}

export default FarmForm