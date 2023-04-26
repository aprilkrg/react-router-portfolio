import { useState } from "react"
import { Link } from "react-router-dom"
import BlogForm from "../partials/BlogForm"

export default function Blog(props) {
    const [blogs, setBlogs] = useState([])
	const [newBlog, setNewBlog] = useState({ id: "", title: "", description: "" })

    const blogPosts = props.posts.map((post,i) => {
        return(
            <h3>
                <Link to={`/blog/${post.id}`}>
                    {post.title}
                </Link>
            </h3>
        )
    })

    const stateBlogs = blogs.map((blog, i) => {
        return(
            <h3>
                {blog.title}
            </h3>
        )
    })
    return(
        <>
            <h2>Blog</h2>
            <BlogForm 
                blogs={blogs}
                setBlogs={setBlogs}
                newBlog={newBlog}
                setNewBlog={setNewBlog}
            />
            {blogs.length ? stateBlogs : null}
            {blogPosts}
        </>
    )
}