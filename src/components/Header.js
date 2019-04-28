 import React from 'react'

const Header = (props) => (
    <div className="header">
        <div className="container">
            <p className="header__title">{props.title}</p>
            {props.subheading && <p className="header__subtitle">{props.subheading}</p>}
        </div>
    </div>
)  
// default prop values
Header.defaultProps = {
    title: "Indecision"
}


export default Header