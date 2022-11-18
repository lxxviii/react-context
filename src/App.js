import { useEffect, useState } from 'react';

function App() {
 
  // TODO : 1.Seviye Tamamlandı, Tüm Componentler Bir Arada
  const [users, setUsers] = useState(false)
  const [name, setName] = useState('BORA')
  const [avatar, setAvatar] = useState(false)

  const addPost = (data) => {

    const headers = new Headers();
    //headers.append('Content-type', 'application/json')
    headers.append('Authorization', 'Bearer bora1234abc')

    const formData = new FormData()
    formData.append('userId', data.userId)
    formData.append('title', data.title)
    formData.append('body', data.body)

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      //body: JSON.stringify(data),
      body: formData,
      headers, //headers:headers olarak yazılabilir
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => {
          if (response.ok && response.status === 200) {
            return response.json();
          }
        })
      .then(data => { setUsers(data) })
      .catch(error => console.log(error))

    addPost({
      userId: 1,
      title: 'Örnek Post',
      body: 'Post İçeriği'
    });

  }, [])


  const submitHandle = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('avatar', avatar)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <>
      <form onSubmit={submitHandle}>
        <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} /> <br />
        <input type='file' name='avatar' onChange={e => setAvatar(e.target.files[0])} /> <br />
        <button type='submit' disabled={!name || !avatar}> Kaydet </button>
  </form>
      <h2> USER LIST </h2>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>

  );
}
export default App;