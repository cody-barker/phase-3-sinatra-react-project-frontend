import React from 'react'
import Selector from './Selector'

function EditBeds({onBedSubmit, onBedChange, state, select, selectFarm, allFarms, onFarmChange}) {
    return(
        <div>
            <h3>Add a Bed</h3>
            <Selector select={select} selectFarm={selectFarm} allFarms={allFarms} onFarmChange={onFarmChange}/>
            <form onSubmit={onBedSubmit}>
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
                <br></br>
                </label>
                <br></br>
                    Crop
                    <input
                    type="text"
                    name="crop"
                    value={state.crop}
                    onChange={onBedChange}>
                    </input>
                <label>
                    Days to Maturity
                    <input
                    type="integer"
                    name="dtm"
                    value={state.dtm}
                    onChange={onBedChange}>
                    </input>
                </label>
                <label>
                    Planting Date
                    <input
                    type="date"
                    name="plantingDate"
                    value={state.plantingDate}
                    onChange={onBedChange}>
                    </input>
                </label>
                <label/>
            </form>
        </div>
    )
}

export default EditBeds