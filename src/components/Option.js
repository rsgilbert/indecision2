import React from 'react'

const Option = (props) => {
    return (
        <div>
            <li>Option: {props.option}</li>
            <button onClick={
                (e) => props.handleSingleDelete(props.option)
            }>Remove</button>
        </div>
    )
}

export default Option