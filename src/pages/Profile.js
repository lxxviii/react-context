import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Profile() {
    const { setUser, user } = useAuth()
    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <div>
            <div> Profile Sayfası</div><br />
            {!user && <Link to='/auth/login'> Giriş Yap </Link>}
            {user && <button onClick={logoutHandle}>Çıkış Yap</button>}
        </div>
    )
}