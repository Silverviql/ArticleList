import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addComment} from "../../AC";
import {connect} from "react-redux"

class CommentForm extends Component {
    static defaultProps = {};

    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    };

    state = {
        user: '',
        text:''
    };

    render() {
        return (
            <form onSubmit ={this.hundleSumbit}>
                Имя:<input  value={this.state.user}
                           onChange={this.hundleChange('user')}
                           className={this.getClassName('user')}/>
            <div>
                Комментарий:<input value={this.state.text}
                                   onChange={this.hundleChange('text')}
                                   className={this.getClassName('text')}/>
                <input type='submit' value = 'submit'/>
            </div>
            </form>
        );
    }
    hundleSumbit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user:'',
            text: ''
        })
        console.log('---', 'add comment')
    }
        //Отследивает количество введеных символов если меньше то вызывает валидацию
    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min ? 'form-input_error': ''

        //Проверяет условие при изменение состояния,если количество сивмолов больше то не дает писать дальше. если нет то меняет состояние
    hundleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type ]: value
        })
    }
}

const limits = {
    user :{
        min: 5,
        max: 15
    },
    text: {
        min:20,
        max:50
    }
}


export default  connect(null,{addComment})(CommentForm);