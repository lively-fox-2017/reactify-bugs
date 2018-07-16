import React from 'react'

class CardBug extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className="mdl-cell--12-col">
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="">
                        <h3>Bug Id: 
                            <p className="">{this.props.CardBugProps.BugId}</p>
                        </h3>
                        
                    </div>
                    <div className="">
                        <h3>Bug Desc: 
                            <p className="">{this.props.CardBugProps.desc}</p>
                        </h3>
                        
                    </div>
                    <div className="">
                        <h3>Bug Severity: 
                            <p className="">{this.props.CardBugProps.sev}</p>
                        </h3>
                        <h3>PIC: 
                            <p className="">{this.props.CardBugProps.pic}</p>
                        </h3>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button 
                        onClick={this.updateParent.bind(this, this.props.CardBugProps,this.props.indexnya)}
                        className="mdl-button mdl-button--colored mdl-js-button">
                            status : {this.props.CardBugProps.status}
                        </button><br />
                        <button 
                            onClick={this.deleteState.bind(this, this.props.indexnya)}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Delete
                        </button>
                    </div>
                </div><br /><br />
            </div>
        )
    }

    deleteState (val) {
        this.props.onDelete(val)
    }

    updateParent (objVal, index) {
        // this.props.CardBugProps.status = 'close'
        // this.setProps({
        //     status:'close'
        // })
        this.props.onUpdate(objVal,index)
    }
}

export default CardBug