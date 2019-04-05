import React from 'react'
import Option from './Option'
const Options = (props) => (
    <div>
        <ol>
            {
                props.options.map((op) => 
                    <Option 
                        key={op}
                        option={op}
                        handleSingleDelete={props.handleSingleDelete}
                    /> 
                )   
            }
        </ol>
        <button onClick={props.handleRemoveOptions}>Remove all</button>
    </div>
)

export default Options