import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto text-center">
            <img className="mx-auto mt-24" src="https://i.ibb.co/ThZ1PCN/404-drib23-unscreen.gif" alt="" />
            <Link to="/">
                <button className="btn btn-warning">Back to Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;