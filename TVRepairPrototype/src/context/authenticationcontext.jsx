import { createContext,useContext,useState,useEffect } from "react";


const AuthContext = createContext(null)


export function useUserAuth() {
    return useContext(AuthContext);
}

export default function AuthenticationContext ( {children})
{

    const [user,setUser] = useState(null);

    function Logout()
    {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
        user,
        setUser, 
        Logout
        }}>
            
        {children}
        </AuthContext.Provider>
    )

}