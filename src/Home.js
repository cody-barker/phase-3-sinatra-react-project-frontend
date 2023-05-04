import TableRow from './TableRow'
import React, { useState, useEffect } from 'react';
import FarmSelector from './FarmSelector'

function Home ({allFarms, onFarmChange, select, selectFarm, allBedComps, selectBedComps}) {
  
    return(
        <div className="App">
      <h1>Farm Tracker</h1>

      <FarmSelector allFarms={allFarms} onFarmChange={onFarmChange}/>

      <h4>{select === "All Farms" ? null : `${selectFarm.city}, ${selectFarm.state}`}</h4>

      <table>
        <thead>
          <tr>
            <th>Bed ID</th>
            <th>Sq Ft</th>
            <th>In Use</th>
            <th>Crop</th>
            <th>DTM</th>
            <th>Planting Date</th>
            <th>Harvest Date</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {select === "All Farms" ? allBedComps : selectBedComps}
        </tbody>
      </table>

    </div>
    )
}

export default Home