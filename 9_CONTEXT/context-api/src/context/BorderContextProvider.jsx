import { createContext, useContext, useReducer } from "react";

export const BorderContext = createContext()
export const borderReducer = (state, action) => {
    switch (action.type) {
        case '10%':
            return { ...state, borderRadius: '10%' }
        case '20%':
            return { ...state, borderRadius: '20%' }
        case '30%':
            return { ...state, borderRadius: '30%' }
        case '40%':
            return { ...state, borderRadius: '40%' }
        case '50%':
            return { ...state, borderRadius: '50%' }
        default:
            return state
    }
}

export const BorderContextProvider = ({ children }) => {
    const [state, dispatch2] = useReducer(borderReducer, { borderRadius: '5%' })
    return <BorderContext.Provider value={{ ...state, dispatch2 }}>
        {children}
    </BorderContext.Provider>
}