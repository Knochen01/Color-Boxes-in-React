import React from "react";

const Box = (props) => {
    return (
        <div>
            <div
            className="Boxes"
            style={{backgroundColor: props.color}}></div>
        </div>
    )
}
export default Box;