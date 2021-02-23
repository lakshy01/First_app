import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Register from './Login/Register';
import Login from './Login/Login';
import ChangePassword from './Login/ChangePassword';
import Admin from './Admin/Admin';
import User from './User/User';
// import HomePage from './HomePage/HomePage';

class App extends React.Component {


    render() {
        console.log(this.props.room_no1);
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <div>
                        {/* <Route path="/" exact component={HomePage} /> */}
                        <Route path="/user" exact component={User} />
                        <Route path="/admin" exact component={Admin} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/changePassword" exact component={ChangePassword} />
                    </div>
                    {/* <Footer /> */}
                </BrowserRouter>
            </React.Fragment >
        )
    };
};

const mapStateToProps = (state) => {
    return {
        room_no1: state.register_room,
        room_no2: state.login_room
    }
}

export default connect(mapStateToProps)(App);