class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = { count: props.count }
    }
    render(){
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={this.handleAdd}>Plus 1</button>
                <button onClick={this.handleMinus}>Minus 1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }

    handleAdd () {
        this.setState((prevState) =>  { 
            return { count: prevState.count + 1 } // updating not overwritting previous state object
        })
    }
    handleMinus () {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        })
    }
    handleReset () {
        this.setState(() => {
            return { count: 0 }
        })
    }
}
Counter.defaultProps = {
    count: 3
}


ReactDOM.render(<Counter count={-1}/>, document.getElementById("app"))