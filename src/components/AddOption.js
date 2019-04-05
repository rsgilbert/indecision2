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
                {this.state.error && <p>{this.state.error} </p>}
                <form onSubmit={this.addOption}>
                    <input autoFocus placeholder="What could I do" type="text" name="new_option"></input>
                    <button >Add Option</button>
                </form>
            </div>
        )
    }   
}