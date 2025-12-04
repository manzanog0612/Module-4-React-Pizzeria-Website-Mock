import { createContext, useState } from "react"

export const UserContext = createContext({});

export const UserContextProvider = ({children}) =>{
    const [token, setToken] = useState(true);

    const logout = () =>
    {
        setToken(false);
    }
    
    const globalState = {
            token,
            logout,
        }
    
        return (
        <UserContext.Provider value = {globalState}>
            {children}
        </UserContext.Provider>)
}