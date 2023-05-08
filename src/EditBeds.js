import React from 'react'
import Selector from './Selector'

function EditBeds({onBedChange, state, select, selectFarm, allFarms, onFarmChange}) {
    return(
        <div>
            <h3>Add a Bed</h3>
            <Selector select={select} selectFarm={selectFarm} allFarms={allFarms} onFarmChange={onFarmChange}/>
            <form>
                <label>
                    Square Feet
                    <input
                    type="integer"
                    name="sqFt"
                    value={state.sqFt}
                    onChange={onBedChange}>
                    </input>
                </label>
                <br></br>
                <label> In Use
                <select name="inUse" onChange={onBedChange} value={state.inUse}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </label>
            </form>
        </div>
    )
}

export default EditBeds