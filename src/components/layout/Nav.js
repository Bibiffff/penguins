import { Link } from "react-router-dom";
import logo from "../images/3628639.png";

const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo"/>
                        Penguins
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/food">Food</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/penguins">Penguins</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/location">Location</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
