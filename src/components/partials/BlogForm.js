export default function BlogForm() {
    return(
    <>
        <h2>Add a New Blog Post</h2>
        <form>
            <label htmlFor="post-title"></label>
            <input name="title" id="post-title" type="text"/>
            <label htmlFor="post-description"></label>
            <input name="description" id="post-description" type="text"/>
            <input type="submit"/>
        </form>
    </>
    )
}