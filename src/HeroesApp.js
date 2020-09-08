import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { authReducer } from './auth/authReducer'
import { AuthContext } from './auth/AuthContext'
import { useEffect } from 'react';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.getItem('user', JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
