import { Routes, Route, Link } from 'react-router-dom'
import Post from './Post'

export default function Posts(props) {
    const blogPosts = props.posts.map((postObj, idx) => {
        return (
            <h3>
                <Link to={`/posts/${postObj.id}`}>{postObj.title}</Link>
            </h3>
        )
    })
    console.log(blogPosts, 'postsssss')
    return(
        <>
            <h2>Blog</h2>
            <div>
                {blogPosts}
            </div>
        </>
    )
}