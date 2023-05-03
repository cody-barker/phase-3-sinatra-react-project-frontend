import React from 'react'

function TableRow({bed}) {

const {id, sq_ft, in_use, crop, dtm, planting_date, harvest_date} = bed

    return(
        <tr>
            <td>{id}</td>
            <td>{sq_ft}</td>
            <td>{in_use ? "Yes" : "No"}</td>
            <td>{crop}</td>
            <td>{dtm}</td>
            <td>{planting_date}</td>
            <td>{harvest_date}</td>
            <td><button>X</button></td>
        </tr>
    )
}
export default TableRow