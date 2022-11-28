import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink to='/' className={({ isActive }) => isActive && 'aktif'}> Home </NavLink>
                <NavLink to='/contact' style={({ isActive }) => ({
                    backgroundColor: isActive ? 'red' : 'transparent'
                })}> Contact </NavLink>
                <NavLink to='/blog'>
                    {({ isActive }) => (
                        <span>
                            Blog
                            {isActive && '(Aktif)'}
                        </span>
                    )}
                </NavLink>
                <NavLink to='/profile'>
                    {({ isActive }) => (
                        <span>
                            Profile
                        </span>
                    )}
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}