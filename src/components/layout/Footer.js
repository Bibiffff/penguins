import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare, AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin, AiFillHome, AiFillPhone, AiFillMail } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
    const [data, setData] = useState({ email: undefined });

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("you have been successfully registered to newsletter");
        event.target.reset();
    }

    return (
        <footer className="text-center text-lg-start text-light" style={{ backgroundColor: "#2B498B" }}>
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            </section>
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Newsletter
                            </h6>
                            <form onSubmit={handleFormSubmit}>
                                <div className="row justify-content-evenly px-lg-0 px-4">
                                    <input className="" type="email" onChange={handleFormChange} id="email" name="email" />
                                    <button className="mt-1 text-center btn-light rounded-1 col-3 col-md-8 col-lg-5">Submit </button>
                                </div>

                            </form>
                        </div>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <div className="fas fa-gem me-3 text-secondary"></div>
                                Penguins
                            </h6>
                            <p>
                                Quisque porta, ipsum quis pretium posuere, libero nisl sodales libero,a cursus sem elit quis arcu.
                                Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links to Home page c:
                            </h6>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                            <p>
                                <Link to="/" className="text-reset">Home</Link>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><AiFillHome /> Penguins, Penguins island, Unknown</p>
                            <p>
                                <AiFillMail /> Penguins.hehe@gmail.com
                            </p>
                            <p><AiFillPhone /> + 01 23 45 67</p>
                            <p><AiFillPhone /> + 01 89 58 89</p>
                            <div>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillFacebook />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillTwitterSquare />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillGoogleSquare />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillInstagram />
                                </Link>
                                <Link to="/" className="me-4 link-secondary">
                                    <AiFillLinkedin />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                © 2023 Copyright:
                <Link className="text-reset fw-bold" to="/" > Penguins.Peng.GUNS</Link>
            </div>
        </footer>
    )
}

export default Footer;