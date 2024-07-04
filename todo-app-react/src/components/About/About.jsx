import React, { useEffect } from 'react';
import './About.css'; // Import the CSS file for styling
import { useParams } from 'react-router-dom';

function About(props) {
    const {id} = useParams();

    useEffect(() => {
     console.log("i am id :",id)
     // i will implement here logic to get the items details
    }, [id]);

    return (
        <div className="about-container">
            {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocJKj6bFytr3bSiO9iA_2FXy8Q2jddtXkZx0uP84yJcCAyPrNVLT=s96-cg" alt="devdynamoak Logo" className="logo" /> */}
            <h1>About devdynamoak</h1>
            <p>Hi, I'm Asif Khan, also known as devdynamoak. I'm a passionate full-stack developer dedicated to crafting digital solutions that drive growth and success. With expertise in mobile development, microservices architecture, and web application development, I provide comprehensive services to bring your ideas to life.</p>
            <h2>Services Offered</h2>
            <ul>
                <li>Mobile Development</li>
                <li>Microservices Architecture</li>
                <li>Web Application Development</li>
            </ul>
            <p>Connect with me on social media:</p>
            <a className='a' href="https://www.instagram.com/devdynamoak/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className='a' href="https://www.linkedin.com/in/asif-khan-31b7a8187/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    );
}

export default About;