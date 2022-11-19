import { useEffect } from 'react';
import { PostService, UserService } from './services'
//TODO çoklu isim tekli dinamik hale getirildi
//import { getPosts, getPostDetail, newPosts } from './services';

function App() {

  useEffect(() => {

    PostService.getPosts().then((response) => console.log(response))
    PostService.getPostDetail(2).then((response) => console.log(response))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'Bu Bir TEST bodydir.'
    }).then((response) => console.log(response))

    UserService.getUsers()

  }, [])

  return (
    <>
      APP
    </>
  );
}
export default App