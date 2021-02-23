import React from 'react';

import TimeSlot from './TimeSlot';
import axios from 'axios';
import './Style.css';
import UserData from './UserData';

class User extends React.Component {

    state = { time_zone: "AM", textColor: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'] };

    helper = async () => {
        const response = await axios.get(`http://localhost:8080/api/login_details/${this.state.time_zone}`);
        console.log(response.data);
        let eve_zone = ["5:00-5:15PM", "5:15-5:30PM", "5:30-5:45PM", "5:45-6:00PM", "6:00-6:15PM", "6:15-6:30PM", "6:30-6:45PM", "6:45-7:00PM", "7:00-7:15PM", "7:15-7:30PM"];
        let mor_zone = ["10:00-10:15AM", "10:15-10:30AM", "10:30-10:45AM", "10:45-11:00AM", "11:00-11:15AM", "11:15-11:30AM", "11:30-11:45AM", "11:45-12:00AM", "12:00-12:15AM", "12:15-12:30AM"];
        let tmp = [];
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].isCompleted === true) {
                if (this.state.time_zone === "AM") {
                    for (let j = 0; j < 10; j++) {
                        if (mor_zone[j] === response.data[i].time_slots) {
                            tmp.push(j);
                        }
                    }
                }
                if (this.state.time_zone === "PM") {
                    for (let j = 0; j < 10; j++) {
                        if (eve_zone[j] === response.data[i].time_slots) {
                            tmp.push(j);
                        }
                    }
                }
            }
        }
        let colors = ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'];
        for (let j = 0; j < tmp.length; j++) {
            colors[tmp[j]] = 'red';
        }
        this.setState({
            textColor: colors
        })
    }

    renderList = () => {
        if (this.state.time_zone === "AM") {
            return UserData.mor.map((time_slot, index) => {
                return (
                    <TimeSlot time_slot={time_slot} key={time_slot.id} time_zone={this.state.time_zone} isColor={this.state.textColor[index]} />
                )
            })
        } else if (this.state.time_zone === "PM") {
            return UserData.eve.map((time_slot, index) => {
                return (
                    <TimeSlot time_slot={time_slot} key={time_slot.id} time_zone={this.state.time_zone} isColor={this.state.textColor[index]} />
                )
            })
        }
    }

    onAm = () => {
        this.setState({ time_zone: "AM" })
        this.helper();
    }

    onPm = () => {
        this.setState({ time_zone: "PM" })
        this.helper();
    }

    componentDidMount() {
        this.helper();
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container3">
                        <div className="am-box">
                            <button className="btn btn-am" type="submit" onClick={() => this.onAm()}>AM</button>
                        </div>
                        <div className="pm-box">
                            <button className="btn btn-pm" type="submit" onClick={() => this.onPm()} >PM</button>
                        </div>
                    </div>
                </header>
                {this.renderList()}
            </React.Fragment>
        )
    }
}

export default User;