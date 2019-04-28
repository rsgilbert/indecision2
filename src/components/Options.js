import React from 'react'
import Option from './Option'
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h2 className="widget-header__title">Your options</h2>
            <button className="button button--link" onClick={props.handleRemoveOptions}>
                Remove all
            </button>
        </div>
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
      </div>
)

export default Options