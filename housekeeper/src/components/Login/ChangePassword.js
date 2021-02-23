import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ChangePasswordFieldRoom, ChangePasswordFieldOldPassword, ChangePasswordFieldNewPassword } from '../../actions';

class ChangePassword extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        let data = {
            password: this.props.new_password,
            token: localStorage.getItem('jwtToken')
        }
        axios.post(`http://localhost:8080/api/change_Password/${this.props.roomNo}`, data)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error while sending the data");
            })
    }

    render() {
        return (
            <div className="container mb-3">
                <h2 className="loginTitle">Change Password</h2>
                <p>We will get back to you soon!!</p>
                <form>
                    <input
                        type="test"
                        name="room"
                        placeholder="101"
                        value={this.props.roomNo}
                        onChange={(event) => this.props.ChangePasswordFieldRoom(event.target.value)}
                    />
                    <label htmlFor="inputPassword4">Old Password</label>
                    <input type="password" value={this.props.old_password} onChange={(event) => this.props.ChangePasswordFieldOldPassword(event.target.value)} className="form-control" id="inputPassword2" placeholder="Password" required />
                    <label htmlFor="inputPassword4">New Password</label>
                    <input type="password" value={this.props.new_password} onChange={(event) => this.props.ChangePasswordFieldNewPassword(event.target.value)} className="form-control" id="inputPassword4" placeholder="Password" required />
                    <button type="submit" className="btn btn-primary content" onClick={this.onFormSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        roomNo: state.change_password_room,
        old_password: state.change_password_oldpassword,
        new_password: state.change_password_newpassword
    }
}

export default connect(mapStateToProps, { ChangePasswordFieldRoom: ChangePasswordFieldRoom, ChangePasswordFieldOldPassword: ChangePasswordFieldOldPassword, ChangePasswordFieldNewPassword: ChangePasswordFieldNewPassword })(ChangePassword);