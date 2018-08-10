import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        username: '',
        comment:''
    };

    render() {
        return (
            <form onSubmit ={this.hundleSumbit}>
                Имя:<input  value={this.state.username}
                           onChange={this.hundleChange('username')}
                           className={this.getClassName('username')}/>
            <div>
                Комментарий:<input value={this.state.comment}
                                   onChange={this.hundleChange('comment')}
                                   className={this.getClassName('comment')}/>
                <input type='submit' value = 'submit'/>
            </div>
            </form>
        );
    }
    hundleSumbit = ev => {
        ev.preventDefault()
        this.setState({
            username:'',
            comment: ''
        })
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
    username :{
        min: 5,
        max: 15
    },
    comment: {
        min:20,
        max:50
    }
}
export default CommentForm;
