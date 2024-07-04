import React, { useEffect } from 'react';
import './MyContact.css'; // Import the CSS file for styling
import { useSearchParams } from 'react-router-dom';
function Contact(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get('id'));
        // setSearchParams({name: 'Asif Khan', address: 'India', id: 1, age: 25});
        console.log(searchParams.get('name'));
        console.log(searchParams.get('address'));
    },[searchParams]);


    return (
        <div className="contact-container">
            <form className="contact-form">
            <h2>Contact Us</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;