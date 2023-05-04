import React from 'react'

function Selector ({onFarmChange, allFarms}) {
    return (
        <select onChange={onFarmChange}>
        <option>All Farms</option>
        {allFarms.map(farm => <option key={farm.id}>{farm.name}</option>)}
      </select>
    )
}

export default Selector