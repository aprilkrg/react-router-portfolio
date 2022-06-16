import { useParams } from 'react-router-dom'
export default function Post(props) {
    const { postId } = useParams()
    const onePost = props.posts.find(post => post.id === parseInt(postId))
    return(
        <>
            <h2>{onePost.title}</h2>
            <p>{onePost.description}</p>
        </>
    )
}