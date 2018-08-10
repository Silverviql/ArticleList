import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = { username: '', comment:''};

    render() {
        return (
            <div>
                <div>
                    Имя:<input type='text' value={this.state.username} onChange={this.hundleUserChange}/>
                </div>
                <div>
                    Комментарий:<input type='text' value={this.state.comment} onChange={this.hundleCommentChange}/>
                </div>
            </div>
        );
    }
    hundleUserChange = (ev) => {
        if(ev.target.value.length < 5 || ev.target.value.length > 15) return;
        this.setState({
            username: ev.target.value
        })
    };
    hundleCommentChange = (ev) => {
        if(ev.target.value.length < 20 || ev.target.value.length >50) return;
        this.setState({
            comment: ev.target.value
        })
    }
}

export default UserForm;
