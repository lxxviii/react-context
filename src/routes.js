import Home from './pages/Home'
import Contact from './pages/Contact'
import BlogLayout from './pages/blog/BlogLayout'
import Blog from './pages/blog/Blog'
import Categories from './pages/blog/Categories'
import Post from './pages/blog/Post'
import Blog404 from './pages/blog/Blog404'
import Page404 from './pages/Page404'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import AuthLayout from './pages/auth/AuthLayout'
import Login from './pages/auth/Login'
import HomeLayout from './pages/HomeLayout'

const routes = [
    {
        name: 'home',
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                name: 'index',
                index: true,
                element: <Home />
            },
            {
                name: 'contact',
                path: 'contact',
                admin: true,
                element: <Contact />
            },
            {
                name: 'blog',
                path: 'blog',
                element: <BlogLayout />,
                auth: true, //MAP ile Return edilecek
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog />
                    },
                    {
                        name: 'categories',
                        path: 'categories',
                        element: <Categories />
                    },
                    {
                        name: 'post',
                        path: 'post/:id/:url',
                        element: <Post />
                    },
                    {
                        name: 'notFound',
                        path: '*',
                        element: <Blog404 />
                    }
                ]
            },
            {
                name: 'profile',
                path: 'profile',
                //PrivateRoute olması halinde, element: <PrivateRoute><Profile /></PrivateRoute> Yerine
                element: <Profile />,
                auth: true //map ile Return Edilebilir.
            }
        ],
    },
    {
        name: 'auth',
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                name: 'login',
                path: 'login',
                element: <Login />
            }
        ]
    },
    {
        name: 'notFound',
        path: '*',
        element: <Page404 />
    }
]

const authMap = routes => routes.map(
    route => {
        if (route?.auth) {
            route.element = <PrivateRoute>{route.element}</PrivateRoute>
        }
        if (route?.children) {
            route.children = authMap(route.children)
        }
        /*if(route?.admin){
            route.admin = <AdminRoute>{route.admin}</AdminRoute>
        } ADMIN'e göre oluşturmalıdır*/

        return route
    }
)
export default authMap(routes)