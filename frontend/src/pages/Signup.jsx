import { Link } from "react-router-dom";
import GoogleLoginButton from '../components/GoogleLoginButton';
export default function Signup() {
    return (
        <section className='signup'>
            <div className="signup-header">
                <h1>KitabCycle</h1>
                <h3>Buy. Read. Resell. Repeat.</h3>
            </div>
            <div className="signup-card">
                <h3>Welcome to KitabCycle</h3>
                <h3>Signup to continue to KitabCycle</h3>
                <GoogleLoginButton navigateTo="/create-profile"/>
            </div>
            <div className="signup-footer">
                <span>Already have an acoount on KitabCycle ?</span>
                <Link to="/login">Login</Link>
            </div>
        </section>
    )
}
