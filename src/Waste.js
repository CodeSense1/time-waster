import React from 'react'

const Waste = (props) => {
    if (props.waste > 59) {
        let hours = Math.floor(props.waste / 60)
        let minutes = props.waste - hours * 60

        return <p>Time wasted: {hours}:{minutes}</p>

    } else {
        return <p>Time wasted: {props.waste}</p>
    }
}

export default Waste;