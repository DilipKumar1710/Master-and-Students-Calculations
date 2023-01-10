import { Component } from 'react';
import './index.css';

class SignupForm extends Component {
    state = {
        username: '',
        password: '',
        cpassword: '',
        showError: false,
        passwordStatus: false,
        confirmPasswordStatus: false,
    }

    onChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmitDetails = event => {
        event.preventDefault()
        const { username, password, cpassword } = this.state
        localStorage.setItem("username", JSON.stringify(username));
        if (password === cpassword) {
            const { history } = this.props
            localStorage.setItem("password", JSON.stringify(password));
            history.replace('/login');
        }
        else {
            this.setState({
                showError: true
            })
        }
    }

    onChangePasswordCheckbox = () => {
        this.setState(prevStat => ({ passwordStatus: !prevStat.passwordStatus }));
    }

    onChangeConfirmPasswordCheckbox = () => {
        this.setState(prevStat => ({ confirmPasswordStatus: !prevStat.confirmPasswordStatus }))
    }

    render() {
        const { passwordStatus, username, password, cpassword, showError, confirmPasswordStatus } = this.state
        let pwdType;
        if (passwordStatus === true) {
            pwdType = 'text'
        }
        else {
            pwdType = 'password'
        }
        let confirmPwdType;
        if (confirmPasswordStatus === true) {
            confirmPwdType = 'text'
        }
        else {
            confirmPwdType = 'password'
        }
        return (
            <div className='signup-container'>
                <form className='signup-form' onSubmit={this.onSubmitDetails}>
                    <h2 className='signup-heading'>SignUp Form</h2>
                    <p className='signup-info'>Please Enter Below Details</p>
                    <label htmlFor='username' className='label'>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder='Enter Username'
                        className='input-box'
                        onChange={this.onChangeInput}
                    />
                    <label htmlFor='password' className='label'>Password</label>
                    <input
                        type={pwdType}
                        id="password"
                        name="password"
                        value={password}
                        placeholder='Enter Username'
                        className='input-box'
                        onChange={this.onChangeInput}
                    />
                    <input type="checkbox" className='checkbox' onChange={this.onChangePasswordCheckbox} />
                    <label htmlFor='cpassword' className='label'>Confirm-Password</label>
                    <input
                        type={confirmPwdType}
                        id="cpassword"
                        name="cpassword"
                        value={cpassword}
                        placeholder='Enter Username'
                        className='input-box'
                        onChange={this.onChangeInput}
                    />
                    <input type="checkbox" className='checkbox' onChange={this.onChangeConfirmPasswordCheckbox} />
                    <input type="submit" name="Submit" className='submit-btn' />
                    {showError && <p className='error-info'>Please Enter Correct Details</p>}
                </form>
            </div>
        )
    }
}

export default SignupForm