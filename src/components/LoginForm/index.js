import { Component } from 'react';
import './index.css'

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        showPassword: false,
        errorMsg: '',
    }


    givenUserDetails = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitSuccess = () => {
        const { history } = this.props;
        history.replace('/home');
    }

    onSubmitFailure = (errorMsg) => {
        this.setState({
            showPassword: true,
            errorMsg
        })
    }


    submitUserDetails = event => {
        event.preventDefault()
        const { username, password } = this.state
        const userDetails = localStorage.getItem("username")
        const userId = JSON.parse(userDetails)
        const pwdDetails = localStorage.getItem("password")
        const pwd = JSON.parse(pwdDetails)


        if (username === userId && password === pwd) {
            this.onSubmitSuccess()
        }
        else {
            const error_msg = "Username or Password entered incorrectly"
            this.onSubmitFailure(error_msg)
        }
    };

    render() {
        const { username, password, showPassword, errorMsg } = this.state

        return (
            <div className='login-container'>
                <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1672470180/11785899_4826435_fdxes9.jpg" alt="login" className="mobile-login-image" />
                <form className='form-container' onSubmit={this.submitUserDetails}>
                    <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1672473575/Screenshot_2022-12-31_132917_suscef.jpg" alt="loginLogo" className='login-logo' />
                    <h2 className='login-note'>Please Login Here!</h2>
                    <div className='input-container'>
                        <label htmlFor='username' className='username'>USERNAME</label>
                        <input id='username'
                            type="text"
                            name="username"
                            value={username}
                            className='input-box'
                            onChange={this.givenUserDetails} />
                        <label htmlFor='password' className='username'>PASSWORD</label>
                        <input id='password'
                            type="password"
                            name="password"
                            value={password}
                            className='input-box'
                            onChange={this.givenUserDetails} />
                    </div>
                    <button className='login-btn' type="submit">Login</button>
                    {showPassword && <p className='error-msg'>{errorMsg}</p>}
                </form>
                <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1672470180/11785899_4826435_fdxes9.jpg" alt="login" className="desktop-login-image" />
            </div>
        )
    }
}

export default LoginForm