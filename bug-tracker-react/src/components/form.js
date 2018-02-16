import React, { Component } from 'react'
import { SelectField, Option } from 'react-mdl-selectfield';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desc : null,
            sev : 'low',
            pic : null
        }
    }
    render() {
        return (
            <div className="">
                <form onSubmit={this.dataForm.bind(this)}>
                    <h3>Add New Bug Report</h3>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                        <label htmlFor="input_text" className="mdl-textfield__label">Describe a bug</label>
                        <input
                        name="desc"
                        onChange={this.onChange.bind(this)} 
                        type="text" 
                        className="mdl-textfield__input" 
                        id="input_text" 
                        required="required"/>
                    </div><br/>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label className="mdl-select__label" htmlFor="Severity">Severity: </label>
                        <select 
                        value={this.state.sev}
                        onChange={this.onChange.bind(this)}
                        name="sev"  
                        className="mdl-textfield__input" 
                        id="Severity" 
                        required="required">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div><br/>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <label htmlFor="input_PIC" className="mdl-textfield__label">Assign To</label>
                        <input 
                        name="pic"
                        onChange={this.onChange.bind(this)}
                        type="text" 
                        className="mdl-textfield__input" 
                        id="PIC" 
                        required="required"/>
                    </div><br/>

                    <button 
                    // onClick={this.dataForm.bind(this)}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    onChange (e) {
        const name = e.target.name
        // alert(name)
        this.setState({
            [name]: e.target.value
        }, ()=>{
            console.log(JSON.stringify(this.state))
        })
    }

    dataForm (e) {
        e.preventDefault()
        this.props.receiveData(this.state)
        this.setState({
            desc: null,
            sev: 'low',
            pic: null
        })
    }
}

export default Form
