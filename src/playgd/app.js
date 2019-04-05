class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this)
        this.handleSingleDelete = this.handleSingleDelete.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    // react methods
    componentDidMount() {
        this.setState(() => ({
            options: JSON.parse(localStorage.getItem("options"))
        }))
        console.log('component has mounted')
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            localStorage.setItem("options", JSON.stringify(this.state.options))
            console.log('component updated', JSON.stringify(this.state.options))
        }

        
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
    handleRemoveOptions() {
        this.setState( () => ( { options: [] } ) )
    }
    handleSingleDelete(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => op !== option)
        }))
    }
    handlePick(){
        const pick = Math.floor(Math.random() * this.state.options.length + 0)
        alert(this.state.options[pick])
    }
    handleAddOption(option){
        if(!option) {
            return "Enter valid option"
        } else if (this.state.options.indexOf(option) > -1){
            return "Option already included"
        }
        this.setState( (prevState) => ( { options: prevState.options.concat(option) } ) )
    }


    render() {
        const heading = "Indecision App"
        const subheading = "Allow me to decide for you"
        return (
            <div>
                <Header subheading={subheading}/>
                <ChooseOption
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}/>
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveOptions={this.handleRemoveOptions}
                    handleSingleDelete={this.handleSingleDelete}
                />
            </div>
        )
    }
}
// defaults for IndecisionApp
IndecisionApp.defaultProps = {
    options: ["Add default"]
}

//stateless functional component
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

//stateless functional component
const ChooseOption = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do</button>      
        </div>
    )
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
const renderApp = () => ReactDOM.render(<IndecisionApp options={["dig"]}/>, document.getElementById('app'))

renderApp()

//stateless functional component
// faster than class components

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// const renderApp = () => ReactDOM.render(<User name="Gil" age="1"/>, document.getElementById('app'))

