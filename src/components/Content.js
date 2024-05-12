import React from "react";

function Content({employee}) {
    // return <div>{props.employee?.name}</div>

    return (
        <div>
            <h2>{employee?.nama}</h2>
            <h2>{employee?.alamat}</h2>
        </div>
    )
}

export default Content