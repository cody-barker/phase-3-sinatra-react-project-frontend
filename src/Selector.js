import React from 'react'

function Selector ({onFarmChange, allFarms, select}) {

    return (
      <select value={select} onChange={onFarmChange}>
        <option>All Farms</option>
        {allFarms.map(farm => <option key={farm.id}>{farm.name}</option>)}
      </select>
    )
}

export default Selector