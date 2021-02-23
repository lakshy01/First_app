import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/styles.css';

import { LoginFieldPassword, LoginFieldRoomNo, login_user, get_id } from '../../actions';

const Login = (props) => {

    const [path, setPath] = useState('/login');

    const onFormSubmit = (event) => {
        event.preventDefault();
        let tmp = props.room_no;
        if (props.pswd === '' || props.room_no === '') alert("Please fill the details");
        let data = {
            password: props.pswd,
            roomNo: props.room_no
        }

        axios.post(`http://localhost:8080/api/login/${props.room_no}`, data)
            .then((data) => {
                console.log(data.data);
                localStorage.setItem('token', data.data);
                setPath("/user");
            })
            .catch((err) => {
                console.log("Error while sending the data");
            })
        props.get_id(tmp);

    }

    return (
        <center>
            <section id="formArea">
                <form>
                    <div className="container boxContainer1">
                        <div className="Row">
                            <div className="col">
                                <h1>Log In</h1>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col col-xs-auto">
                                <input type="text" className="form-control" value={props.room_no} onChange={(event) => props.LoginFieldRoomNo(event.target.value)} id="exampleInputroom1" name="roomNo" placeholder="Room Number" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col col-xs-auto">
                                <input type="password" className="form-control" value={props.pswd} onChange={(event) => props.LoginFieldPassword(event.target.value)} id="exampleInputPassword1" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-outline-success btnSize1" onClick={onFormSubmit}><Link to={path}>Log In</Link></button>
                            </div>
                        </div>
                    </div>
                </form>
                <br />
            </section>
        </center>
    );
};

const mapStateToProps = (state) => {
    return {
        pswd: state.login_password,
        room_no: state.login_room
    }
}

export default connect(mapStateToProps, { LoginFieldPassword: LoginFieldPassword, LoginFieldRoomNo: LoginFieldRoomNo, login_user: login_user, get_id: get_id })(Login);

