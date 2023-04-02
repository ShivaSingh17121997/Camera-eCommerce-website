import { useState } from "react";
import React from "react";
import { createContext } from "react";



function AuthContextProvider({children}){
    const [state, setState] = useState({
        isAuth: false,
        token: null
    })
    const loginUser = (token) => {
        setState({
            ...state,
            isAuth:true,
            token,
        })
    }
    const logoutUser = () => {
        setState({
            ...state,
            isAuth: false,
            token: null
        })
    }

    return (
        <AuthContext.Provider value={{
            authState: state,
            loginUser, logoutUser
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
export const AuthContext= createContext();