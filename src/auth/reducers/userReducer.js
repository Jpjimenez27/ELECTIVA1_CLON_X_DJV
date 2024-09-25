import { userTypes } from "../../userTypes";

export const userReducer = (state = {}, action = {}) => {

    switch (action.type) {
        case userTypes.logIn:
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case userTypes.logOut:
            return {
                logged: true,
                user: {},
            };
        default:
            return state;
    }
};