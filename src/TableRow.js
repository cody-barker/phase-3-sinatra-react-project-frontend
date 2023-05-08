import React from 'react'

function TableRow({bed, setAllBeds, allBeds, selectBeds, setSelectBeds}) {

const {id, sq_ft, in_use, crop, dtm, planting_date, harvest_date} = bed

function onDelete(){
    fetch(`http://localhost:9292/beds/${id}`, {
        method: "DELETE"
    })
    .then(r => r.json())
    .then(bed => {
        setAllBeds([...allBeds].filter(obj => obj.id != bed.id))
        setSelectBeds([...selectBeds].filter(obj => obj.id != bed.id))
    })
}

    return(
        <tr>
            <td>{id}</td>
            <td>{sq_ft}</td>
            <td>{in_use ? "Yes" : "No"}</td>
            <td>{crop}</td>
            <td>{dtm}</td>
            <td>{planting_date}</td>
            <td>{harvest_date}</td>
            <td>
                <button onClick={onDelete} className="delete">Delete</button>
            </td>
        </tr>
    )
}

export default TableRow