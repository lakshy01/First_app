import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <section id="contact">
                <footer id="footer">
                    <p>Connect With Us</p>
                    <Link className="contactme" to="https://github.com/mehulraj19"> <i className="fab fa-github"></i></Link>
                    <Link className="contactme" to="https://www.linkedin.com/in/mehul-raj-bb322518b/"><i className="fab fa-linkedin-in"></i></Link>
                    <Link className="contactme" to="mailto:mehulraj1995@gmail.com"><i className="fas fa-envelope"></i></Link>
                    <p className="footer-p">© FFHCS </p>
                </footer>
            </section>
        );
    };
};

export default Footer;
