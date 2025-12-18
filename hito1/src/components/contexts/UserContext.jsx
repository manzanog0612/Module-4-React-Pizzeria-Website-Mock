import { createContext, useState } from "react"

export const UserContext = createContext({});

export const UserContextProvider = ({children}) =>{
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");

    const getUserProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();

        if (data.error) {
          alert(data.error);
        }

        console.log("req me - respuesta del servidor:", data);
        setEmail(data.email);

      } catch (err) {
       alert("Hubo un error: " + err)
      }
    };

    const doUserSignIn = async (email, password, fetchType) =>
    {
        const jsonUser = JSON.stringify(
        {
            email: email,
            password: password
        })

        try {
            const res = await fetch("http://localhost:5000/api/auth/" + fetchType,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonUser,
            });
            const data = await res.json();
            console.log("req " + fetchType + " - respuesta del servidor: ", data);
            if (data.error){
                alert(data.error)
            }
            if (data.token)
            {
                setEmail(data.email)
                setToken(data.token);
            }
        }
        catch (err){
            alert("Hubo un error: " + err)
        }
    }

    const login = async (email, password) =>
    {       
        await doUserSignIn(email, password, "login");
    }

    const register = async (email, password) =>
    {       
        await doUserSignIn(email, password, "register");
    }

    const logout = () =>
    {
        setToken(false);
        setEmail("");
    }
    
    const globalState = {
            token,
            login,
            register,
            logout,
            getUserProfile,
            email
        }
    
        return (
        <UserContext.Provider value = {globalState}>
            {children}
        </UserContext.Provider>)
}