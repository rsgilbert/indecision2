import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import ChooseOption from './ChooseOption'
import Header from './Header'
import OptionalModal from './OptionModal'


export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options || []
        ,selectedOption: undefined
    }
//   properties
    handleRemoveOptions =() => {
        this.setState( () => ( { options: [] } ) )
    }
    handleSingleDelete = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => op !== option)
        }))
    }
    handlePick = () => {
        const pick = Math.floor(Math.random() * this.state.options.length + 0)
        this.setState(()=>({
            selectedOption: this.state.options[pick]
        })
        )
    }
    handleAddOption = (option) => {
        if(!option) {
            return "Enter valid option"
        } else if (this.state.options.indexOf(option) > -1){
            return "Option already included"
        }
        this.setState( (prevState) => ( { options: prevState.options.concat(option) } ) )
    }
    wipeSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
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
                <OptionalModal 
                    selectedOption={this.state.selectedOption}
                    wipeSelectedOption={this.wipeSelectedOption}
                />
            </div>
        )
    }
      // react methods
      componentDidMount() {
        if(localStorage.hasOwnProperty("options")){
            this.setState(() => ({
                options: JSON.parse(localStorage.getItem("options"))
            }))
        }      
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
}
// defaults for IndecisionApp
IndecisionApp.defaultProps = {
    options: ["Add default"]
}