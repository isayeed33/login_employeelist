import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {login} from '../../redux/reducer';
import NavBar from '../NavBar';
import './LoginForm.css'

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        let{email, password} = this.state;
        this.props.login(email, password);
    }

    render() {
        let{isLoginPending, isLoginSuccess, isLoginError} = this.props;
        return (
            <Fragment>
                <NavBar></NavBar>
                <div onSubmit={this.onSubmit}>
                    <form className="form">
                    <br/><br/>
                        <input type="email" name="email" placeholder="Username" onChange={e => this.setState({email: e.target.value})}></input>
                        <br/><br/>
                        
                        <input type="password" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}></input>
                        <br/><br/>
                        <input type="submit" value="Login"></input>

                        {isLoginPending && <div>Please wait...</div>}
                        {isLoginSuccess && this.props.history.push('/')}
                        {isLoginError && <div>{isLoginError.message}</div>}
                    </form>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        isLoginError: state.isLoginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)