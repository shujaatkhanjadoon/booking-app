import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer className="bg-blue-800 py-10">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">Booking App</Link>
                </span>
                <span className="text-white tracking-tight font-bold flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </footer>
    )
}