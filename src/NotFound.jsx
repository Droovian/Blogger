import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="text-red-700 font-light flex flex-col justify-center items-center space-y-2 p-3">
            <h1 className="font-bold text-2xl">Sorry</h1>
            <h2>That Page cannot be found as it does not exist</h2>
            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;