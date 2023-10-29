import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {

    const  { id } = useParams();
    const { data:blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="h-auto">
            <h2 className="text-bold text-blue-500 text-2xl text-center mt-5 mb-10 p-2">Blog details - {id}</h2>
            { isPending && <div>Loading...</div> }
            { error && <div> { error }</div> }
            { blog && (
                <article className="w-3/4 mx-auto border border-black shadow-md p-3">
                    <div className="flex justify-between mb-5">
                    <h2 className="text-xl font-bold text-blue-500"> {blog.title}</h2>
                    
                    </div>
                    <p className="font-light"> {blog.body} </p>
                    <div className="mt-4 flex justify-end">
                    <p className="font-light text-sm text-blue-400">Written by {blog.author}</p>
                    </div>
                </article>
            )}
            <div className="flex justify-center items-center">
            <button onClick={handleClick} className="mt-3 mb-5 border px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">Delete</button>
            </div>
                <footer></footer>
        </div>
     );
}
 
export default BlogDetails;