import { useRoutes, generatePath } from 'react-router-dom'
import routes from './routes'
import { url } from './utils'

export default function App() {
  console.log(
    //console.log(generatePath('post/:id/:url', { id: 2, url: 'test-url' }))
    url('home.blog.categories',)
  )
  return useRoutes(routes)
}