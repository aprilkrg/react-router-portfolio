export default function BlogForm(props) {
    return(
    <>
        <h2>Add a New Blog Post</h2>
        <form>
            <label htmlFor="post-title">Title: </label>
            <input 
                name="title" 
                id="post-title" 
                type="text"
                value={props.newBlog.title}
            />
            <label htmlFor="post-description">Description: </label>
            <input 
                name="description" 
                id="post-description" 
                type="text"
                value={props.newBlog.description}
            />
            <input type="submit"/>
        </form>
    </>
    )
}