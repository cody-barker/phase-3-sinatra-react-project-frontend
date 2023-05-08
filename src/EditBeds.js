import React from 'react'
import Selector from './Selector'

function EditBeds({select, selectFarm, allFarms, onFarmChange}) {
    return(
        <div>
            <h3>Add a Bed</h3>
            <Selector select={select} selectFarm={selectFarm} allFarms={allFarms} onFarmChange={onFarmChange}/>
            <form>
                
            </form>
        </div>
    )
}

export default EditBeds