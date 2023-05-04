import React, {useState} from 'react'

function FarmForm() {

    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")


    return (
        <form autoComplete="off">
            <input type="text" placeholder="Farm Name"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="State"></input>
      </form>
    )
}

export default FarmForm