import { Link } from "react-router-dom"
import BlogForm from "../partials/BlogForm"

export default function Blog(props) {
    const blogPosts = props.posts.map((post,i) => {
        return(
            <h3>
                <Link to={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
        )
    })
    return(
        <>
            <h2>Blog</h2>
            <BlogForm />
            {blogPosts}
        </>
    )
}