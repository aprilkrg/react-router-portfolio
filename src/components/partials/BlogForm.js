export default function BlogForm(props) {
    const handleChange = (e) => {
        props.setNewBlog({
            ...props.newBlog, 
            [e.target.name]: e.target.value
        })
    }
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
                onChange={handleChange}
            />
            <label htmlFor="post-description">Description: </label>
            <input 
                name="description" 
                id="post-description" 
                type="text"
                value={props.newBlog.description}
                onChange={handleChange}
            />
            <input type="submit"/>
        </form>
    </>
    )
}