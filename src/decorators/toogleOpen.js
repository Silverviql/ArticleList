import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) =>class WrapperComponent extends ReactComponent {

    state = {
        isOpen: false
    };

   /* componentDidMount(){
        console.log('---', 'mounting')
    }

    componentDidUpdate(){
        console.log('---', 'updating')
    }

    componentWillUnmount(){
        console.log('---', 'unmouting')
    }*/
    render() {
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toogleOpen={this.toogleOpen} ref ={this.getRef}/>
    }

    toogleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getRef = (ref) => {
        //console.log('---', ref)
    }
}