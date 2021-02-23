import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../css/styles.css';

import { RegisteredfieldEmail, RegisteredfieldPassword, RegisteredfieldRoomNo, RegisteredfieldRegNo, registered_user } from '../../actions';

import Img3 from '../../images/img3.jpg';
import Img2 from '../../images/img3.png';

class Register extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.email);
        let data = {
            email: this.props.email,
            password: this.props.pswd,
            roomNo: this.props.room_no,
            regNo: this.props.reg
        }
        axios.post(`http://localhost:8080/api/register/${this.props.room_no}`, data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error while sending the data");
            })
        this.props.RegisteredfieldRoomNo(this.props.room_no);
        this.props.registered_user(data);
    }

    render() {
        return (
            <section id="formArea">
                <form>
                    <div className="container boxContainer">
                        <div className="row">
                            <div className="col">
                                <img src={Img3} alt="" className="img1" />
                            </div>
                            <div className="col">
                                <div className="Row">
                                    <div className="col col-md-14">
                                        <img src={Img2} alt="" className="userImage" />
                                    </div>
                                    <div className="col">
                                        <h1>Sign Up</h1>
                                        <p>Now get your Room clean in your Own time!!</p>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col col-xs-auto">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Registration Number</label>
                                        <input type="text" className="form-control" value={this.props.reg} onChange={(event) => this.props.RegisteredfieldRegNo(event.target.value)} id="exampleInputEmail1" name="regNo" placeholder="18bce1146" />
                                    </div>
                                    <div className="col col-xs-auto">
                                        <label htmlFor="exampleInputEmail2" className="form-label">Room Number</label>
                                        <input type="text" className="form-control" value={this.props.room_no} onChange={(event) => this.props.RegisteredfieldRoomNo(event.target.value)} id="exampleInputEmail2" name="roomNo" placeholder="101" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col col-xs-auto">
                                        <label htmlFor="exampleInputEmail3" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail3" value={this.props.email} onChange={(event) => this.props.RegisteredfieldEmail(event.target.value)} aria-describedby="emailHelp" name="email" placeholder="me@email.com" />
                                    </div>
                                    <div className="col col-xs-auto">
                                        <label htmlFor="exampleInputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword4" value={this.props.pswd} onChange={(event) => this.props.RegisteredfieldPassword(event.target.value)} name="password" placeholder="Password" />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <input type="checkbox" /> I accept to all terms
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <button type="submit" className="btn btn-outline-success btnSize" onClick={this.onFormSubmit}><Link to="/user">Sign Up</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
                <br />
                <br />
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        email: state.register_email,
        pswd: state.register_password,
        room_no: state.register_room,
        reg: state.register_Reg
    }
}

export default connect(mapStateToProps, { RegisteredfieldEmail: RegisteredfieldEmail, RegisteredfieldPassword: RegisteredfieldPassword, RegisteredfieldRoomNo: RegisteredfieldRoomNo, RegisteredfieldRegNo: RegisteredfieldRegNo, registered_user: registered_user })(Register);