import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    const api = axios.create({
        baseURL: "http://localhost:8000/api",
        withCredentials: true
    })

    const login = async (email, password, rememberMe) => {

        try {
            const response = await api.post("/login", {email, password})
            navigate(-1)
            if (rememberMe) {
                localStorage.setItem("auth_token", response.data.token)
            }
            else {
                sessionStorage.setItem("auth_token", response.data.token)
            }
            setUser({
                id: response.data.user.id,
                email: response.data.user.email,
                name: response.data.user.name
            })
            setAuthenticated(true)
        }
        catch (error) {
            throw error.response?.data
        }

    }

    const register = async (name, email, password, password_confirmation) => {

        try {

            await api.post("/register", {name, email, password, password_confirmation})
            login(email, password)

        }
        catch (error) {

            throw error.response.data

        }

    }

    const logout = async () => {

        try {

            await axios.post("http://localhost:8000/api/logout", {},{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
                },
                withCredentials: true
            })
            setUser(null)
            setAuthenticated(false)
            localStorage.removeItem("auth_token")
            sessionStorage.removeItem("auth_token")
            navigate('/Login')

        }
        catch (error) {

            console.error("failed to logout", error)

        }
    }  
 
    const fetchUser = async () => {
        
        const token = localStorage.getItem("auth_token")
        if (!token) {
            setLoading(false)
            return
        }

        try {

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            const response = await api.get("/user")
            setUser(response.data)
            setAuthenticated(true)

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

    // useEffect(() => {
    //     console.log("token: ",localStorage.getItem("auth_token"))
    //     console.log("user: ", user)
    // }, [user])

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                setLoading,
                setAuthenticated,
                authenticated,
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


// 
//     "token":"7|lTaLwXRNXiAo7kBrFo43iKawFt28ehzOhm9NMn5W5234e71f",
//     "user":{
//             "id":1,
//             "name":"Naeem",
//             "email":"Naeem@gmail.com"
//     }
// }