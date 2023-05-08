import FarmForm from './FarmForm'
import Selector from './Selector'

function EditFarms({ onAddFarm, onNameChange, onCityChange, onStateChange, onDeleteFarm, onUpdateFarm, select, setSelect, selectBeds, setSelectBeds, selectFarm, setSelectFarm, name, setName, city, setCity, farmState, setFarmState, allFarms, onFarmChange}) {

    return (
        <div>
            <h3>Add A Farm</h3>
            <FarmForm onNameChange={onNameChange} onCityChange={onCityChange} onStateChange={onStateChange} onUpdateFarm={onAddFarm} selectBeds={selectBeds} setSelectBeds={setSelectBeds} selectFarm={selectFarm} select={select} setSelectFarm={setSelectFarm} setSelect={setSelect} name={name} setName={setName} city={city} setCity={setCity} farmState={farmState} setFarmState={setFarmState}/>

            <h3>Update a Farm</h3>
            <Selector select={select} selectFarm={selectFarm} allFarms={allFarms} onFarmChange={onFarmChange}/>
            
            {select === "All Farms" ? null : <FarmForm onNameChange={onNameChange} onCityChange={onCityChange} onStateChange={onStateChange} onUpdateFarm={onUpdateFarm} selectBeds={selectBeds} setSelectBeds={setSelectBeds} selectFarm={selectFarm} select={select} setSelectFarm={setSelectFarm} setSelect={setSelect} name={name} setName={setName} city={city} setCity={setCity} farmState={farmState} setFarmState={setFarmState}/>}
            <button className="delete" onClick={onDeleteFarm}>Delete Farm</button>
        </div>
    )
}

export default EditFarms