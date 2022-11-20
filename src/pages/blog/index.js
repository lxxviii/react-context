import { memo } from "react"
import { Outlet } from "react-router-dom"

function BlogLayout() {
    return (
        <>
            <h3>Index.js Page (BlogLayout Sayfası)</h3>
            <Outlet />
        </>
    )
} export default memo(BlogLayout)