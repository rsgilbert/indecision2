import React from 'react'

const Option = (props) => (
    <div className="option">
        <li className="option__text"> {props.option}</li>
        <button className="button button--link" onClick={
            (e) => props.handleSingleDelete(props.option)
        }>Remove</button>
    </div>
)

export default Option