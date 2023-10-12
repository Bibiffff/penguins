import { useState } from "react";
import "./contact.scss";



const Contact = () => {
    const [form, setForm] = useState({ name: undefined, email: undefined, message: undefined });

    const handleFormChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setForm((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert("you have been successfully send message");
        event.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div className="row justify-content-center mx-5 py-3">
                    <div className="formDesign">
                        <h1>Contect us</h1>
                        <hr />
                        <div className="p-4 pt-0">
                            <div className="row">
                                <label className="pe-3 " htmlFor="name">Name: </label>
                                <input onChange={handleFormChange} type="text" id="name" name="name" />
                            </div>
                            <div className="row">
                                <label className="pe-3" htmlFor="email">Email: </label>
                                <input onChange={handleFormChange} type="email" id="email" name="email" />
                            </div>
                            <div className="row">
                                <label>Your Message:</label>
                                <textarea onChange={handleFormChange} rows="4" name="message" placeholder="Enter your message" id="contact-message"></textarea>
                            </div>
                        </div>
                        <div className="text-end">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;