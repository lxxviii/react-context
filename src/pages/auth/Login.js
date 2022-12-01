import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const location = useLocation()
    const { setUser } = useAuth()

    console.log(location)

    const loginHandle = () => {
        setUser({
            id: 1,
            userName: 'tayfun'
        })
        navigate(location?.state?.return_url || '/', {
            replace: true,
            state: {
                name: 'tayfun'
            }

        })
    }

    return (
        <div>
            Login Page <br />
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}