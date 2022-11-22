import { Outlet } from "react-router-dom"

export default function BlogLayout() {
    return (
        <div>
            <h3>Index</h3>
            <Outlet />
        </div>

    )
}