import React from 'react';
import { connect } from 'react-redux';

import { ClickedFloor } from '../../actions';
import Floor from './Floor';
import AdminData from './AdminData';
import './styles.css';
class Admin extends React.Component {

    onFloorClicked = async (admin_detail) => {
        console.log("Clciked")
        this.props.ClickedFloor(admin_detail);
        //const response = await axios.get(`http://localhost:8080/all_room_per_floor_details/${admin_detail.id}`);
        //console.log(response);
        console.log(this.props.current_floor.id);

    }

    renderList = () => {
        return AdminData.map((admin_detail) => {
            return (
                <Floor key={admin_detail.id} admin_detail={admin_detail} onClick={() => this.props.onFloorClicked(admin_detail)} />
            )
        });
    };

    render() {
        return (
            <React.Fragment>
                <div id="main">
                    <h1>Room Number</h1>
                    {this.renderList()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { current_floor: state.click_floor };
}

export default connect(mapStateToProps, { ClickedFloor: ClickedFloor })(Admin);