import React from 'react';
import axios from 'axios';


class Floor extends React.Component {
    state = { textColor: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'] };

    helper = async (admin_detail) => {
        const response = await axios.get(`http://localhost:8080/api/all_room_per_floor_details/${admin_detail.id}`);
        let tmp = [];
        for (let i = 0; i < response.data.length; i++) {
            let index;
            if (response.data[i].isFinish === true) {
                let room_no = response.data[i].roomNo;
                let len = room_no.length;
                index = parseInt(room_no[len - 2] + room_no[len - 1]);
            }
            for (let j = 0; j < this.state.textColor.length; j++) {
                if (j === index - 1) {
                    tmp.push(j);
                }
            }
        }
        let colors = ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green'];
        for (let i = 0; i < tmp.length; i++) {
            colors[tmp[i]] = 'red';
        }
        this.setState({
            textColor: colors
        })
    }


    render() {
        return (
            <div className="dropdown" onClick={() => this.helper(this.props.admin_detail)}>
                <button className="dropbtn">{this.props.admin_detail.floor_no}</button>
                <div className="dropdown-content">
                    <a href="room101" style={{ 'color': this.state.textColor[0] }}>{this.props.admin_detail.room_no_1}</a>
                    <a href="room102" style={{ 'color': this.state.textColor[1] }}>{this.props.admin_detail.room_no_2}</a>
                    <a href="room103" style={{ 'color': this.state.textColor[2] }}>{this.props.admin_detail.room_no_3}</a>
                    <a href="room104" style={{ 'color': this.state.textColor[3] }}>{this.props.admin_detail.room_no_4}</a>
                    <a href="room105" style={{ 'color': this.state.textColor[4] }}>{this.props.admin_detail.room_no_5}</a>
                    <a href="room106" style={{ 'color': this.state.textColor[5] }}>{this.props.admin_detail.room_no_6}</a>
                    <a href="room107" style={{ 'color': this.state.textColor[6] }}>{this.props.admin_detail.room_no_7}</a>
                    <a href="room108" style={{ 'color': this.state.textColor[7] }}>{this.props.admin_detail.room_no_8}</a>
                    <a href="room109" style={{ 'color': this.state.textColor[8] }}>{this.props.admin_detail.room_no_9}</a>
                    <a href="room110" style={{ 'color': this.state.textColor[9] }}>{this.props.admin_detail.room_no_10}</a>
                </div>
            </div>
        )
    }
}

export default Floor;