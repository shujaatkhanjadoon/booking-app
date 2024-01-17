import { Link } from "react-router-dom";
export const Header = () =>{
    return(
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">Booking App</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="flex items-center text-blue-600 px-3 font-bold hover:bg-gray-100 bg-white rounded-sm transition">Sign In</Link>
                </span>
            </div>
        </div>
    )
}