import { Link } from "react-router-dom";
import { Search } from "lucide-react"
import logo from "../assets/logo.jpeg";
function Navbar() {
    return (
        <>
            <header className="navbar">
                <div className="navbarlogo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="navbar-links">
                    <Link to="/books">Browse Books</Link>
                    <Link to="/sell">Sell Your Books</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="navbar-signup-login">
                    <button className="search-icon-btn" aria-label="Search">
                        <Search size={18} />
                    </button>
                    <Link to="/signup" className="btn-primary">Signup</Link>
                    <Link to="/login" className="btn-outline">Login</Link>
                </div>
            </header>
        </>
    )
}

export default Navbar