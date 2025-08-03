import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const api = axios.create({
        baseURL: "http://localhost:8000/api",
        withCredentials: true
    })

    const login = async (email, password) => {

        try {
            const response = await api.post("/login", {email, password})
            setUser(response.data)
            localStorage.setItem("authToken", response.data.token)
            return response.data
        }
        catch (error) {
            throw error.response.data
        }

    }

    const register = async (name, email, password, password_confirmation) => {

        try {

            const response = await api.post("/register", {name, email, password, password_confirmation})
            return response.data

        }
        catch (error) {

            throw error.response.data

        }

    }

    const logout = async () => {

        try {

            await api.post("/logout")
            setUser(null)
            localStorage.removeItem("authToken")

        }
        catch (error) {

            console.error("failed to logout", error)

        }
    }  
 
    const fetchUser = async () => {
        
        const token = localStorage.getItem("authToken")
        if (!token) {
            setLoading(false)
            return
        }

        try {

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            const response = await api.get("/user")
            setUser(response.data)

        }
        catch (error) {

            localStorage.removeItem("authToken")

        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login, 
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)