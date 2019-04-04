class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleRemoveOptions() {
        this.setState(() => {
            console.log("removing")
            return {
                options: []
            }
        })     
    }
    handlePick(){
        const pick = Math.floor(Math.random() * this.state.options.length + 0)
        alert(this.state.options[pick])
    }
    handleAddOption(option){
        if(!option) {
            return "Enter valid option"
        } else if(this.state.options.indexOf(option) > -1){
            return "Option already included"
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    render() {
        const heading = "Indecision App"
        const subheading = "Allow me to decide for you"
        return (
            <div>
                <Header heading={heading} subheading={subheading}/>
                <ChooseOption
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveOptions={this.handleRemoveOptions}/>
            </div>
        )
    }
}
class Header extends React.Component{
    render() { // must be defined, required by React component
        return (
            <div>
                <h3>{this.props.heading}</h3>
                <p>{this.props.subheading}</p>
            </div> 
        )
    }
}

class ChooseOption extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do</button>      
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    addOption(e) {
        e.preventDefault()
        const new_option = e.target.elements.new_option.value.trim()
        e.target.elements.new_option.value = 
        const error = this.props.handleAddOption(new_option)
        this.setState(() => {
            return { error }
        })   
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

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((op) => <Option option={op}/> )
                    }
                </ol>
                <button onClick={this.props.handleRemoveOptions}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <li>Option: {this.props.option}</li>
            </div>
        )
    }
}
const renderApp = () => ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
renderApp()
