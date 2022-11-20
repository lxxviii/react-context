import { useParams } from "react-router-dom"

export default function Post() {

    const { url, id } = useParams()



    return (
        <>
            post page = {url} {id}
            <h4>Post PAGE/BLOG/Post</h4>
        </>
    )
}