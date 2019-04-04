// count app is at the bottom

// babel-cli command
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
const appRoot = document.getElementById("app")

const app = {title: "indecision",
    subtitle: "computer evaluation",
    options: []    
}
const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.options.value
    if(option) {
        app.options.push(option)
        e.target.elements.options.value = ""
        renderApp()
    }
}
const removeAll = () => { //do not use with braces in jsx
    app.options = []
    renderApp()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length + 0)
    const option = app.options[randomNum]
    alert(option)
}

const renderApp = () => {
    const templ = (
        <div>
            <h1>{app.title}</h1>
            <p>{ app.subtitle }</p>
            <p>Choose</p>
            <ol>
                {
                    app.options.map((option) => <li>{option}</li>)
                }
            </ol>
            <button disabled = {app.options.length === 0} onClick={makeDecision}>what should i do</button>
            <button onClick={removeAll}>remove all options</button>
            <form onSubmit = {onFormSubmit}> 
                <input type="text" name="options"></input>
                <button>Add option</button>
            </form>
        </div>
    )
    ReactDOM.render(templ, appRoot) 
}
renderApp()


























let count = 0
const addOne = () => {
    count ++
    renderCountApp()
}

const subtractOne = () =>{
    count --
    renderCountApp()
}

// var appRoot = document.getElementById('app')


const renderCountApp = () => { // manual data binding
    var template = (
        <div>
            <h1>Count: {count}</h1>
            <button id="t-id" className="button" onClick={addOne}>add one</button>
            <button onClick={subtractOne}>subtract</button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
// renderCountApp()

