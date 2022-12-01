import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { url } from "../../utils"

export default function Blog() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('search') || '')

    useEffect(() => {
        searchParams.delete('search')
        if (!search) {
            setSearchParams(Object.fromEntries([...searchParams]))
        }
    }, [search])


    /* Browser'ın adres bar'ına yazılan kısımları yakalar console.log(searchParams.get('search'))*/

    const posts = [
        {
            id: 1,
            title: 'post-1',
            url: 'post-1'
        },
        {
            id: 2,
            title: 'post-2',
            url: 'post-2'
        },
        {
            id: 3,
            title: 'post-3',
            url: 'post-3'
        }
    ]

    return (
        <div>
            <h3>Blog Page</h3>
            <input type='text' defaultValue={search} onChange={e => setSearch(e.target.value)} />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={url('home.blog.post', {
                            id: post.id,
                            url: post.url
                        })}> {post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}