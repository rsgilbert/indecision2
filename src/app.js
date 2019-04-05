import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

const renderApp = () => ReactDOM.render(<IndecisionApp options={["dig"]}/>, document.getElementById('app'))
renderApp()
