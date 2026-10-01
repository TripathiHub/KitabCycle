import GoogleLoginButton from '../components/GoogleLoginButton';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <section className='login'>
            <div className="login-header">
                <h1>KitabCycle</h1>
                <h3>Buy. Read. Resell. Repeat.</h3>
            </div>
            <div className="login-card">
                <h3>Welcome Back </h3>
                <h3>Login to continue to KitabCycle</h3>
                 <GoogleLoginButton/>
            </div>
            <div className="login-footer">
                 <span>New to KitabCycle ?</span>
                <Link to="/signup"> Create an account</Link>
            </div>
        </section>
    )
}
