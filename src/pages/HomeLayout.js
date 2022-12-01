import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom'
import {url} from '../utils'

export default function HomeLayout() {
    return (
        <>
            <nav>
                <NavLink 
                to={url('home')} className={({ isActive }) => isActive && 'aktif'}
                >
                    Home
                </NavLink>
                <NavLink to={url('home.contact')} style={({ isActive }) => ({
                    backgroundColor: isActive ? 'red' : 'transparent'
                })}> Contact
                </NavLink>
                <NavLink to={url('home.blog')}>
                    {({ isActive }) => (
                        <span>
                            Blog
                            {isActive && '(Aktif)'}
                        </span>
                    )}
                </NavLink>
                <NavLink to={url('home.profile')}>
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