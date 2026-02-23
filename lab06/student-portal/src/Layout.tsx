import { Link, Outlet} from 'react-router-dom';

function Layout() {
    return (
        <div className="app">
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/courses" className="nav-link">Courses</Link>
                <Link to="/about" className="nav-link">About</Link>
            </nav>

            <main className="content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>Student Portal 2026 @ All rights reserved </p>
            </footer>
        </div>
    );
}

export default Layout;