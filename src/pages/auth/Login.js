import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navigate = useNavigate()
    const { setUser } = useAuth()
    const loginHandle = () => {
        setUser({
            id: 1,
            userName: 'tayfun'
        })
        navigate('/')
    }

    return (
        <div>
            Login Page <br />
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}