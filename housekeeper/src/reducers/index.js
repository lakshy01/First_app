import { combineReducers } from 'redux';

const RegisterEmailReducer = (state = '', action) => {
    if (action.type === "REGISTERED_EMAIL") {
        return action.payload;
    }
    return state;
}

const RegisterPasswordReducer = (state = '', action) => {
    if (action.type === "REGISTERED_PASSWORD") {
        return action.payload;
    }
    return state;
}

const RegisterRoomNoReducer = (state = '', action) => {
    if (action.type === "REGISTERED_ROOM_NUMBER") {
        return action.payload;
    }
    return state;
}

const RegisterRegNoReducer = (state = '', action) => {
    if (action.type === "REGISTERED_REGISTRATION_NUMBER") {
        return action.payload;
    }
    return state;
}

const LoginPasswordReducer = (state = '', action) => {
    if (action.type === "LOGIN_PASSWORD") {
        return action.payload;
    }
    return state;
}

const LoginRoomNoReducer = (state = '', action) => {
    if (action.type === "LOGIN_ROOM_NO") {
        return action.payload;
    }
    return state;
}

const ChangePasswordRoomNoReducer = (state = '', action) => {
    if (action.type === "CHANGE_PASSWORD_ROOM_NO") {
        return action.payload;
    }
    return state;
}

const ChangePasswordOldPasswordReducer = (state = '', action) => {
    if (action.type === "CHANGE_PASSWORD_OLD_PASSWORD") {
        return action.payload;
    }
    return state;
}

const ChangePasswordNewPasswordReducer = (state = '', action) => {
    if (action.type === "CHANGE_PASSWORD_NEW_PASSWORD") {
        return action.payload;
    }
    return state;
}

const ClickedFloorReducer = (state = 1, action) => {
    if (action.type === "FLOOR_CLICKED") {
        return action.payload;
    }
    return state;
}

const intital_state = {
    email: '',
    password: '',
    roomNo: '',
    regNo: ''
}

const getTheRegisterUserInformationReducer = (state = intital_state, action) => {
    if (action.type === "REGISTER_USER") {
        return action.payload;
    }
    return state;
}

const intital_login_state = {
    password: '',
    roomNo: ''
}

const getTheLoginUserInformationReducer = (state = intital_login_state, action) => {
    if (action.type === "LOGIN_USER") {
        return action.payload;
    }
    return state;
}

const getIdReducer = (state = '', action) => {
    if (action.type === "GET_ID") return action.payload;
    return state;
}

export default combineReducers({
    register_email: RegisterEmailReducer,
    register_password: RegisterPasswordReducer,
    register_room: RegisterRoomNoReducer,
    register_Reg: RegisterRegNoReducer,
    login_password: LoginPasswordReducer,
    login_room: LoginRoomNoReducer,
    change_password_room: ChangePasswordRoomNoReducer,
    change_password_oldpassword: ChangePasswordOldPasswordReducer,
    change_password_newpassword: ChangePasswordNewPasswordReducer,
    click_floor: ClickedFloorReducer,
    register_user: getTheRegisterUserInformationReducer,
    login_user: getTheLoginUserInformationReducer,
    get_id: getIdReducer
});