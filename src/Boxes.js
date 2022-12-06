import React, { useState, useEffect} from 'react';
import './Boxes.css';
import { change } from './helperFunction';
import Box from './Box';

const Boxes = (props) => {

    const [boxes, setBoxes] = useState(
        Array.from({ length: props.numBoxes }, () => change(props.colors))
      );
    console.log(boxes)

    function handleClick() {
        let idx = Math.floor(Math.random() * props.numBoxes)
        console.log(boxes[idx])

       
        setBoxes(data => {
            let colorCopy = [...boxes];
            colorCopy[idx] = change(props.colors)
            return colorCopy
        })
    }
    let boxComponents = boxes.map((colorData, idx) => <Box key={idx} color={colorData} />)
    
    return (
        <div>
            <h1>Congratulations</h1>
            <section>{boxComponents}</section>
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

Boxes.defaultProps = {
    numBoxes: 16,
    colors: [
        "Aqua",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "Chocolate",
        "DodgerBlue",
        "Lavender",
        "LawnGreen",
        "Peru",
        "Plum",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Yellow",
        "YellowGreen"
    ]
}





export default Boxes;