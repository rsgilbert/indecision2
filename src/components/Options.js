import React from 'react'
import Option from './Option'
const Options = (props) => {
    return (
        <div>
            <ol>
                {
                    props.options.map((op) => 
                        <Option 
                            option={op}
                            handleSingleDelete={props.handleSingleDelete}
                        /> 
                    )   
                }
            </ol>
            <button onClick={props.handleRemoveOptions}>Remove all</button>
        </div>
    )
}


export default Options