/*import { useEffect } from 'react';
import { PostService, UserService } from './services'*/
//TODO çoklu isim tekli dinamik hale getirildi
//import { getPosts, getPostDetail, newPosts } from './services';
import { Routes, Route, NavLink } from 'react-router-dom';  //Link
import Contact from './pages/Contact';
import Home from './pages/Home';
import BlogLayout from './pages/blog';
import Categories from './pages/blog/Categories';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';
import Page404 from './pages/Page404';
import Blog404 from './pages/blog/Blog404';
import './style.css';

function App() {
  /*useEffect(() => {

    PostService.getPosts().then((response) => console.log(response))
    PostService.getPostDetail(2).then((response) => console.log(response))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'Bu Bir TEST bodydir.'
    }).then((response) => console.log(response))

    UserService.getUsers()

  }, [])*/
  return (
    <>
      <nav>
        <NavLink to='/' className={({ isActive }) => (isActive && 'active')}>Ana Sayfa</NavLink>
        <NavLink to='/contact' style={({ isActive }) => ({ backgroundColor: isActive ? 'red' : 'greenyellow' })}> İletişim </NavLink>
        <NavLink to='/blog'> BLOG HA! {({ isActive }) => (isActive && 'IS AKTIF')}</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogLayout />} >
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<Categories />} />
          <Route path='post/:url-:id' element={<Post />} />
          <Route path='*' element={<Blog404 />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}
export default App