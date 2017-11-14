import React from 'react'

class CardBug extends React.Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className="mdl-cell--4-col">
                {/* <p>{this.props.indexnya}</p> */}
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand">
                        <h3>Bug Desc: </h3>
                        <h2 className="mdl-card__title-text">{this.props.CardBugProps.desc}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <h3>Bug Severity: </h3>
                        <h2 className="mdl-card__title-text">{this.props.CardBugProps.sev}</h2>
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