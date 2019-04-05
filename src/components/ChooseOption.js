import React from 'react'

const ChooseOption = (props) => {
    return (
        <div>
                <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do</button>      
        </div>
    )
}

export default ChooseOption
