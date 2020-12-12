import {createContext, useState} from "react";
import Auth from "../navigators/Auth";

export const AuthContext=createContext();
export default function AuthProvider({children}){
    const [user,setUser] = useState();
    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}