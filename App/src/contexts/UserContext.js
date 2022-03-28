import React, { createContext, useReducer } from 'react';
import { InitialState, UserReducer } from '../reducers/UserReducers';

export const UserContext = createContext();

export default ({children}) =>{
    const [state, dispatch] = useReducer(UserReducer, InitialState);

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
}