export default function BlogForm(props) {
    return(
        <div>
            <h2>Add a Blog Post</h2>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="post-title">Title:</label>
                <input
                    type="text"    
                    onChange={props.handleTextChange}
                    name="title"
                    id="post-title"
                    value={props.newBlog.title}
                />
                <label htmlFor="post-description">Description:</label>
                <input
                    type="text"    
                    onChange={props.handleTextChange}
                    name="description"
                    id="post-description"
                    value={props.newBlog.description}
                />
                <input type="submit" />
            </form>
        </div>
    )
}