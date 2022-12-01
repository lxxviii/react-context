import { useParams } from "react-router-dom"

export default function Post() {


    const params = useParams()
    console.log("PARAMS", params)

    return (
        <div>
            <h3>Post Page</h3>
        </div>
    )
}