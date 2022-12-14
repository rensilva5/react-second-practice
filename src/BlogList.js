const BlogList = ({blogs, title}) => {  //destructuring

    // const blogs = props.blogs     //All alternative
    // const title = props.title     //All alternative

    return ( 
        <div className="blog-list">
            <h2> {title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p> written by {blog.author} </p>
                    <button></button>
                </div>

            ))}  
        
        </div>
     );
}
 
export default BlogList;