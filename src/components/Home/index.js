import { Component } from 'react';
import "./index.css";

class Home extends Component {
    state = {
        left: '',
        right: '',
        operator: '',
        result: ''
    }

    onChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    rightzero = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightone = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    righttwo = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightthree = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightfour = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightfive = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightsix = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightseven = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    righteight = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }

    rightnine = (left, operator, right) => {
        let value;
        if (operator === "+") {
            value = parseInt(left) + parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "-") {
            value = parseInt(left) - parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "*") {
            value = parseInt(left) * parseInt(right)
            this.setState({
                result: value
            })
        }
        else if (operator === "/") {
            value = parseInt(parseInt(left) / parseInt(right))
            this.setState({
                result: value
            })
        }
    }


    plus = (left, operator) => {
        const { right } = this.state

        if (parseInt(right) === 0) {
            this.rightzero(left, operator, right)
        }
        else if (parseInt(right) === 1) {
            this.rightone(left, operator, right)
        }
        else if (parseInt(right) === 2) {
            this.righttwo(left, operator, right)
        }
        else if (parseInt(right) === 3) {
            this.rightthree(left, operator, right)
        }
        else if (parseInt(right) === 4) {
            this.rightfour(left, operator, right)
        }
        else if (parseInt(right) === 5) {
            this.rightfive(left, operator, right)
        }
        else if (parseInt(right) === 6) {
            this.rightsix(left, operator, right)
        }
        else if (parseInt(right) === 7) {
            this.rightseven(left, operator, right)
        }
        else if (parseInt(right) === 8) {
            this.righteight(left, operator, right)
        }
        else if (parseInt(right) === 9) {
            this.rightnine(left, operator, right)
        }

    }

    minus = (left, operator) => {
        const { right } = this.state

        if (parseInt(right) === 0) {
            this.rightzero(left, operator, right)
        }
        else if (parseInt(right) === 1) {
            this.rightone(left, operator, right)
        }
        else if (parseInt(right) === 2) {
            this.righttwo(left, operator, right)
        }
        else if (parseInt(right) === 3) {
            this.rightthree(left, operator, right)
        }
        else if (parseInt(right) === 4) {
            this.rightfour(left, operator, right)
        }
        else if (parseInt(right) === 5) {
            this.rightfive(left, operator, right)
        }
        else if (parseInt(right) === 6) {
            this.rightsix(left, operator, right)
        }
        else if (parseInt(right) === 7) {
            this.rightseven(left, operator, right)
        }
        else if (parseInt(right) === 8) {
            this.righteight(left, operator, right)
        }
        else if (parseInt(right) === 9) {
            this.rightnine(left, operator, right)
        }

    }

    times = (left, operator) => {
        const { right } = this.state

        if (parseInt(right) === 0) {
            this.rightzero(left, operator, right)
        }
        else if (parseInt(right) === 1) {
            this.rightone(left, operator, right)
        }
        else if (parseInt(right) === 2) {
            this.righttwo(left, operator, right)
        }
        else if (parseInt(right) === 3) {
            this.rightthree(left, operator, right)
        }
        else if (parseInt(right) === 4) {
            this.rightfour(left, operator, right)
        }
        else if (parseInt(right) === 5) {
            this.rightfive(left, operator, right)
        }
        else if (parseInt(right) === 6) {
            this.rightsix(left, operator, right)
        }
        else if (parseInt(right) === 7) {
            this.rightseven(left, operator, right)
        }
        else if (parseInt(right) === 8) {
            this.righteight(left, operator, right)
        }
        else if (parseInt(right) === 9) {
            this.rightnine(left, operator, right)
        }

    }

    dividesBy = (left, operator) => {
        const { right } = this.state

        if (parseInt(right) === 0) {
            this.rightzero(left, operator, right)
        }
        else if (parseInt(right) === 1) {
            this.rightone(left, operator, right)
        }
        else if (parseInt(right) === 2) {
            this.righttwo(left, operator, right)
        }
        else if (parseInt(right) === 3) {
            this.rightthree(left, operator, right)
        }
        else if (parseInt(right) === 4) {
            this.rightfour(left, operator, right)
        }
        else if (parseInt(right) === 5) {
            this.rightfive(left, operator, right)
        }
        else if (parseInt(right) === 6) {
            this.rightsix(left, operator, right)
        }
        else if (parseInt(right) === 7) {
            this.rightseven(left, operator, right)
        }
        else if (parseInt(right) === 8) {
            this.righteight(left, operator, right)
        }
        else if (parseInt(right) === 9) {
            this.rightnine(left, operator, right)
        }

    }




    leftzero = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftone = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    lefttwo = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftthree = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftfour = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftfive = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftsix = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftseven = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    lefteight = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }

    leftnine = (left) => {
        const { operator } = this.state

        if (operator === "+") {
            this.plus(left, operator)
        }
        else if (operator === "-") {
            this.minus(left, operator)
        }
        else if (operator === "*") {
            this.times(left, operator)
        }
        else if (operator === "/") {
            this.dividesBy(left, operator)
        }
    }


    onSubmitValues = (event) => {
        event.preventDefault();
        const { left } = this.state

        if (parseInt(left) === 0) {
            this.leftzero(0)
        }
        else if (parseInt(left) === 1) {
            this.leftone(1)
        }
        else if (parseInt(left) === 2) {
            this.lefttwo(2)
        }
        else if (parseInt(left) === 3) {
            this.leftthree(3)
        }
        else if (parseInt(left) === 4) {
            this.leftfour(4)
        }
        else if (parseInt(left) === 5) {
            this.leftfive(5)
        }
        else if (parseInt(left) === 6) {
            this.leftsix(6)
        }
        else if (parseInt(left) === 7) {
            this.leftseven(7)
        }
        else if (parseInt(left) === 8) {
            this.lefteight(8)
        }
        else if (parseInt(left) === 9) {
            this.leftnine(9)
        }
    }

    onClickLogout = () => {
        localStorage.clear();
        const { history } = this.props
        history.replace("/");
    }


    render() {
        const { left, right, operator, result } = this.state
        return (
            <div className="game">
                <center>
                    <div className="container">
                        <form onSubmit={this.onSubmitValues}>
                            <div className="result-form">
                                <div className="num-container">
                                    <label htmlFor="left-num" className="num-label">Enter Left Number</label>
                                    <input
                                        id="left-num"
                                        className="input"
                                        name="left"
                                        value={left}
                                        onChange={this.onChangeInput} />
                                </div>
                                <div className="num-container">
                                    <label htmlFor="operator" className="num-label">Enter Operator</label>
                                    <input
                                        id="operator"
                                        className="input"
                                        name="operator"
                                        value={operator}
                                        onChange={this.onChangeInput}
                                    />
                                </div>
                                <div className="num-container">
                                    <label htmlFor="right-num" className="num-label">Enter Right Number</label>
                                    <input
                                        id="right-num"
                                        className="input"
                                        name="right"
                                        value={right}
                                        onChange={this.onChangeInput}
                                    />
                                </div>

                            </div>
                            <input type="submit" name="Get Result" className='result-btn' />
                        </form>
                        <h1 className='answer'>The Answer is: {result}</h1>
                        <button type="button" onClick={this.onClickLogout} className="logout-btn">LogOut</button>
                    </div>
                </center>
            </div>
        )
    }
}
export default Home