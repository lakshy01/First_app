import React from 'react';

import FHCS from './images/FHCS.png';
import img_1 from './images/img-1.jpg';
import img_2 from './images/img-2.jpg';
import img_3 from './images/img-3.jpg';
import nat_8 from './images/nat-8.jpg';
import nat_9 from './images/nat-9.jpg';
import './Style.css';
import './font-icon.css';

class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <div className="header__logo-box">
                        <img src={FHCS} alt="company-logo" className="header__logo" />
                    </div>
                    <div className="header__documentation">
                        <a href="#" className="btn-text">Read Documentation</a>
                    </div>
                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">FFHCS</span>
                            <span className="heading-primary--sub">Your hygiene is important</span>
                        </h1>
                        <a href="#" classNamae="btn btn--white btn--animated">Register</a>
                    </div>
                </header>
                <main>
                    <section className="section-about">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Who are we ??
				        </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-2">
                                <h3 className="heading-tertiary u-margin-bottom-small">Our motivation</h3>
                                <p className="paragraph">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo fuga deleniti dolore nam magni nostrum obcaecati facilis consequatur, voluptatum perferendis in reiciendis quo saepe alias quae voluptates minima accusantium perspiciatis?
					            </p>
                                <h3 className="heading-tertiary u-margin-bottom-small">FFHCS for whome</h3>
                                <p className="paragraph">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab quis eveniet in commodi vitae, id possimus minus ullam alias incidunt.
					            </p>
                            </div>
                            <div className="col-1-of-2">
                                <div className="composition">
                                    <img src={img_1} alt="photo 1" className="composition__photo composition__photo--p1" />
                                    <img src={img_2} alt="photo 2" className="composition__photo composition__photo--p2" />
                                    <img src={img_3} alt="photo 3" className="composition__photo composition__photo--p3" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-features">
                        <div className="row">
                            <div className="col-1-of-3">
                                <div className="feature-box">
                                    <i className="feature-box__icon icon-basic-calendar"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">Time-Table</h3>
                                    <p className="feature-box__text">
                                        Make a complete flexible schedule as suitable to you.
						        </p>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="feature-box">
                                    <i className="feature-box__icon icon-basic-mail-multiple"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">Complaint!</h3>
                                    <p className="feature-box__text">
                                        Complain! if you are not served well as per your time table
						        </p>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="feature-box">
                                    <i className="feature-box__icon icon-basic-sheet"></i>
                                    <h3 className="heading-tertiary u-margin-bottom-small">slots</h3>
                                    <p className="feature-box__text">
                                        Make time table as per slots it makes things easy for you
						        </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-stories">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Some top reviews
				        </h2>
                        </div>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img src={nat_8} alt="person on a tour" className="story__image" />
                                    <figcaption className="story__caption">Mary smith</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        I really loved this application
						        </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis accusantium consequatur tempora voluptate, recusandae optio minus, aperiam cupiditate nihil voluptatibus aliquam quo architecto magnam similique libero in necessitatibus accusamus.
						        </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img src={nat_9} alt="person on a tour" className="story__image" />
                                    <figcaption class="story__caption">Sam smith</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        This application solved my problem of room cleaning
						        </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis accusantium consequatur tempora voluptate, recusandae optio minus, aperiam cupiditate nihil voluptatibus aliquam quo architecto magnam similique libero in necessitatibus accusamus.
						        </p>
                                </div>
                            </div>
                        </div>
                        <div className="u-center-text u-margin-top-huge">
                            <a href="#" className="btn-text">Read more reviews</a>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    };
}

export default HomePage;