import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class TimeSlot extends React.Component {

    onButtonClick = () => {
        console.log(this.props.register_user);
        console.log(this.props.user_id);
        let data = {
            isCompleted: true,
            time_slots: this.props.time_slot.time_slot
        };
        console.log(this.props.room_no1);
        console.log(this.props.room_no2);
        if (this.props.room_no1 !== '' && this.props.room_no2 === '') {
            axios.post(`http://localhost:8080/api/time_slot_registered_data/${this.props.room_no1}`, data)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log("Error while sending the data");
                })
        }
        if (this.props.room_no2 !== '' && this.props.room_no1 === '') {
            axios.post(`http://localhost:8080/api/time_slot_registered_data/${this.props.room_no2}`, data)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log("Error while sending the data");
                })
        }
        alert("Succesfully Registered");
    }

    render() {
        return (
            <main style={{ marginTop: "70px" }}>
                <div className="jumbotron">
                    <div className="time-box">
                        <h1 style={{ 'color': this.props.isColor }}>{this.props.time_slot.time_slot}</h1>
                    </div>
                    <button className="btn-book" type="submit" onClick={() => this.onButtonClick()}>BOOK</button>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        room_no1: state.register_room,
        room_no2: state.login_room,
        register_user: state.register_user,
        user_id: state.get_id
    }
}
export default connect(mapStateToProps)(TimeSlot);