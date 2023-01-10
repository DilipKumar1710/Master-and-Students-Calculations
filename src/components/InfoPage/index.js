import { Link } from 'react-router-dom';
import './index.css';

const InfoPage = () => {
    return (
        <div className='main-container'>
            <form className="form-box">
                <h1 className='information'>Hi, Welcome to Master and Students Calculations Website</h1>
                <p className='suggestion'>Please Select Below Any One of the Options</p>
                <ul className='navigations-container'>
                    <Link to="/signup" className='navigator'>
                        <li>SignUp</li>
                    </Link>
                    <Link to="/login" className='navigator'>
                        <li>Login</li>
                    </Link>
                </ul>
            </form>
        </div>
    )
}
export default InfoPage