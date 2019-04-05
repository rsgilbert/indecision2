class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.visibility = this.visibility.bind(this)
        this.state = {
            visible: true,
            buttonName: "Hide Details",
        }
    }
    visibility() {
        this.state.visible = !this.state.visible
        this.state.visible ? app.buttonName = "Hide Details" : app.buttonName = "Show Details"
    }
    render() {
        return (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={visibility}>{ this.state.buttonName }</button>
            <p>{ app.details } </p>
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'))   