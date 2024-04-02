/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useReducer } from 'react';

const AuthContext = React.createContext({});

interface AuthState{
    user:any,
    isAuthenticated:boolean
}

const initialState : AuthState = {
    user:null,
    isAuthenticated:false
}

const reducer = (state:AuthState,action:any) : AuthState=> {
    switch(action.type){
        case 'login':
            return{...state,user:action.payload,isAuthenticated:true}
        case 'logout':
            return initialState;
        default:
            return state;
    }
}

interface AuthenticationProps{
    children:any
}
const Authentication = ({children}:AuthenticationProps) => {

    const [state,dispatch] = useReducer(reducer,initialState);
    const {user,isAuthenticated} = state;

    const FAKE_USER = {
        name: "Jack",
        email: "jack@example.com",
        password: "qwerty",
        avatar: "https://i.pravatar.cc/100?u=zz",
    };

    const handleLogin = (email:string,password:string) => {
        if(email === FAKE_USER.email && password === FAKE_USER.password){
            dispatch({type:'login',payload:FAKE_USER});
        }
    }

    const handleLogout = () => {
        dispatch({type:'logout'});
    }

    return (
        <AuthContext.Provider value={{
            user,isAuthenticated,handleLogin,handleLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () : any => {
    const context = useContext(AuthContext);
    if(context === undefined)
        throw new Error('You should not use Authcontext outside of Provider');
    return context;
}

export {Authentication,useAuth};