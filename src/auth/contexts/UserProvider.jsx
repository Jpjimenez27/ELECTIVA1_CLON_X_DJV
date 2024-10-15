import { useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import { userReducer } from "../reducers/userReducer"
import { userTypes } from "../../userTypes";
import { Navigate } from "react-router-dom";

const initialState = {
    logged: false,
    user: {},
};

export const UserProvider = ({ children }) => {
    const [userState, dispatch] = useReducer(userReducer, initialState);
    const loginUser = () => {
        const action = {
            type: userTypes.logIn,
            payload: {
             uid: 1938393
            },
        };
              
        dispatch(action);
    };

    const logoutUser = () => { };

    return (
        <UserContext.Provider value={{ userState, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};