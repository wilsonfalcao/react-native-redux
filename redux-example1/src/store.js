import React,{createContext,useReducer} from "react";
import {CheckList} from "./hooks/redux/Reducers";


export const initialState = [];

export const Store = ({children})=>{

    const [state, dispatch] = useReducer(CheckList,initialState)

    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    );
}

export const Context = createContext();