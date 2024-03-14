'use client'
import { createContext, useContext, useState } from "react";

const Context = createContext()


export const useProvider = () => {
    let context = useContext(Context);
    if (!context) throw new Error('useProvider must used in ContextProvider');
    return context;
}

export const ContextProvider = ({ children }) => {
    const [lang, setLang] = useState('C')
    return <Context.Provider value={{ lang, setLang }}>
        {children}
    </Context.Provider>
}