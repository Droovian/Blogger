import { useState } from "react";
import { useHistory } from 'react-router-dom';
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added');
            setIsPending('false');
            history.push('/');
        })

        
        // console.log(blog);
    }

    return ( 
        <div className="mt-10">
            <h2 className="text-xl font-bold text-center text-blue-500 mb-3">Add a new blog</h2>
            <form action="" 
            onSubmit = {handleSubmit}
            className="flex flex-col space-y-2 max-w-1/2 w-1/2 mx-auto">
                <label htmlFor="" className="font-light text-blue-400">Blog Title:</label>
                <input type="text"
                value = {title}
                onChange={(e)=>{ setTitle(e.target.value)}}
                 className="border p-2 font-light"required/>
                <label htmlFor="" className="font-light text-blue-400">Blog Body:</label>
                <textarea name="" id="" cols="30" rows="10" className="border p-2 font-light" 
                value={body}
                onChange={(e)=>{setBody(e.target.value)}}
                requried></textarea>
                <label htmlFor="" className="font-light text-blue-400">Blog Author:</label>
                <select className="border p-2 font-light"
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="mario">Dhruv</option>
                    <option value="yoshi">Martin</option>
                </select>

                { !isPending && <button className="border mt-2 cursor-pointer text-white bg-blue-500 mx-auto p-2 rounded-lg hover:bg-blue-300">Add Blog</button>}
                { isPending && <button className="border mt-2 cursor-pointer text-white bg-blue-500 mx-auto p-2 rounded-lg hover:bg-blue-300">Adding Blog...</button>}

                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>

        </div>
     );
}
 
export default Create;