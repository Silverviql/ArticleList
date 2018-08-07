import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) =>class WrapperComponent extends ReactComponent {

    state = {
        isOpen: false
    }

    render() {
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toogleOpen={this.toogleOpen}/>
    }

    toogleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}