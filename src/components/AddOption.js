import React from 'react'


export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    addOption = (e) => {
        e.preventDefault()
        const new_option = e.target.elements.new_option.value.trim()
        e.target.elements.new_option.value = ""
        const error = this.props.handleAddOption(new_option)
        this.setState(() => ( { error }))   
    }
    render() {
        return (
            <div>
                {this.state.error &&
                <p className="add-option-error">
                    {this.state.error} 
                </p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" autocomplete="off" autoFocus type="text" name="new_option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }   
}