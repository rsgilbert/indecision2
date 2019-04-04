const approot = document.getElementById('app')


let app = {
    state: true,
    buttonName: "Hide Details",
    details: "I am just a simple learner"
}

const visibility = () => {
    app.state = !app.state
    if(app.state) {
        app.buttonName = "Hide Details"
        app.details = "I am a student"
    }
    else {
        app.buttonName = "Show Details"
        app.details = ""
    }
    render()
    
}

const render = () => {
    let template = (
    <div>
        <h1>Visibility toggle</h1>
        <button onClick={visibility}>{ app.buttonName }</button>
        <p>{ app.details } </p>
    </div>
)
    ReactDOM.render(template, approot)   
}
render()