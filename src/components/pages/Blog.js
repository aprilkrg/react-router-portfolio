import { Link } from 'react-router-dom'
import BlogForm from '../partials/BlogForm'

export default function Blog(props) {
	// let postsToRender = props.posts

	// console.log(postsToRender, 'posts')
	const blogPosts = props.posts.map((postObj, idx) => {
		return (
			<h3>
				<Link to={`/blog/${postObj.id}`}>{postObj.title}</Link>
			</h3>
		)
	})
	const blogsFromState = props.blogs.map((blogObj, i) => {
		return (
			<h3>
				<Link to={`/blog/${blogObj.id}`}>{blogObj.title}</Link>
			</h3>
		)
	})

	return (
		<>
			<h2>Blog</h2>
			<BlogForm
				handleSubmit={props.handleSubmit}
				handleTextChange={props.handleTextChange}
				blogs={props.blogs}
				newBlog={props.newBlog}
			/>
			{props.blogs.length ? blogsFromState : ""}
			<div>
				{blogPosts}
			</div>
		</>
	)
}