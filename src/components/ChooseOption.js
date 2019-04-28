import React from 'react'

const ChooseOption = (props) => (
    <div>
        <button  className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>What should I do</button>      
    </div>
)

export default ChooseOption
