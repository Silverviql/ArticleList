import React, {Component as ReactComponent} from 'react';

export default (AccordionComponent) =>class Accordion extends ReactComponent{

       state = {
            openArticleId: null
        };

    render(){
        return <AccordionComponent {...this.props} openArticleId = {this.state.openArticleId} toogleOpenItem = {this.toogleOpenItem}/>
    }

    toogleOpenItem = openArticleId => this.setState({
        openArticleId:this.state.openArticleId === openArticleId ? null : openArticleId
    })
}