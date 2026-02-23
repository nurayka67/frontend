import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="home-link">Go back to Home</Link>
        </div>
    );
}

export default NotFound;