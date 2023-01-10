import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import InfoPage from './components/InfoPage'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={InfoPage} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/home" component={Home} />
            </Switch>
        )
    }
}

export default App