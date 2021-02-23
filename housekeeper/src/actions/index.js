
export const RegisteredfieldEmail = (details) => {
    return {
        type: "REGISTERED_EMAIL",
        payload: details
    };
};

export const RegisteredfieldPassword = (details) => {
    return {
        type: "REGISTERED_PASSWORD",
        payload: details
    };
};

export const RegisteredfieldRoomNo = (details) => {
    return {
        type: "REGISTERED_ROOM_NUMBER",
        payload: details
    };
};

export const RegisteredfieldRegNo = (details) => {
    return {
        type: "REGISTERED_REGISTRATION_NUMBER",
        payload: details
    };
};

export const LoginFieldPassword = (details) => {
    return {
        type: "LOGIN_PASSWORD",
        payload: details
    };
};

export const LoginFieldRoomNo = (details) => {
    return {
        type: "LOGIN_ROOM_NO",
        payload: details
    };
};

export const ChangePasswordFieldRoom = (details) => {
    return {
        type: "CHANGE_PASSWORD_ROOM_NO",
        payload: details
    };
};

export const ChangePasswordFieldOldPassword = (details) => {
    return {
        type: "CHANGE_PASSWORD_OLD_PASSWORD",
        payload: details
    };
};

export const ChangePasswordFieldNewPassword = (details) => {
    return {
        type: "CHANGE_PASSWORD_NEW_PASSWORD",
        payload: details
    };
};

export const ClickedFloor = (floor_id) => {
    return {
        type: "FLOOR_CLICKED",
        payload: floor_id
    };
};

export const registered_user = (detail) => {
    return {
        type: "REGISTER_USER",
        payload: detail
    };
};

export const login_user = (detail) => {
    return {
        type: "LOGIN_USER",
        payload: detail
    };
};

export const get_id = (detail) => {
    return {
        type: "GET_ID",
        payload: detail
    };
};
