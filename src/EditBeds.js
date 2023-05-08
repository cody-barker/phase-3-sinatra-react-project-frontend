import React from 'react'
import Selector from './Selector'

function EditBeds({handleBedChange, state, select, selectFarm, allFarms, onFarmChange}) {
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
                    onChange={handleBedChange}>
                    </input>
                </label>
                <label>

                </label>
            </form>
        </div>
    )
}

export default EditBeds