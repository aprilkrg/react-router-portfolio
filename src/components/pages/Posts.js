import { Link } from 'react-router-dom'
import BlogForm from '../partials/BlogForm'

export default function Posts(props) {
	let postsToRender = props.posts
	
	console.log(postsToRender, 'posts')
		const blogPosts = props.posts.map((postObj, idx) => {
				return (
						<h3>
								<Link to={`/posts/${postObj.id}`}>{postObj.title}</Link>
						</h3>
				)
		})

		return(
				<>
						<h2>Blog</h2>
						<BlogForm 
								handleSubmit={props.handleSubmit}
								handleTextChange={props.handleTextChange}
								blogs={props.blogs}
								newBlog={props.newBlog}
						/>
						<div>
								{blogPosts}
						</div>
				</>
		)
}