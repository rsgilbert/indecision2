import React from 'react'

const Header = (props) => {
    return(
        <div>
            <h3>{props.title}</h3>
            {props.subheading && <p>{props.subheading}</p>}
        </div>
    )
}
// default prop values
Header.defaultProps = {
    title: "Our default"
}


export default Header