import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) =>class WrapperComponent extends ReactComponent{

       state = {
            openArticleId: null
        }

    render(){
        return <OriginalComponent {...this.props} openArticleId = {this.state.openArticleId} toogleOpen = {this.toogleOpen}/>
    }

    toogleOpen = openArticleId => this.setState({
        openArticleId:this.state.openArticleId === openArticleId ? null : openArticleId
    })
}