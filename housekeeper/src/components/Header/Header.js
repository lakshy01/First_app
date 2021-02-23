import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <span>
                <section id="mainArea">
                    <div className="design">
                        <Link to="#" className="mainTag"><h1>FFHCS</h1></Link>
                    </div>
                </section>
            </span>
        );
    };
};

export default Header;