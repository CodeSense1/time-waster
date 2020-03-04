import React, { useState } from 'react'
import './client.css'
import Waste from './Waste'

const WasteMeter = (props) => {
    const [waste, setWaste] = useState(0)


    const handleClick = (e) => {
        setWaste(waste + parseInt(e.target.id))

    }

    return (
        <div className="Wastemeter">

            <h4>Timewaster</h4>

            <button id="15" onClick={handleClick}>Waste 15 min</button>
            <button id="60" onClick={handleClick}>Waste 1 hour</button>
            <button id="-15" onClick={handleClick}>Oops, unwaste 15 min</button>
            <button id="-60" onClick={handleClick}>Oops, unwaste 1 hour</button>

            <Waste waste={waste} />
        </div>
    );
}


export default WasteMeter;