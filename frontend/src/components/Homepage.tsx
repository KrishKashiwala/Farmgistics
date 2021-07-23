import Navbar from './Navbar';
import './componentsCss/homepage.css'
const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="banner">
                <img
                    src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
                    alt="banner"
                />
            </div>
        </div>
    );
};
export default Homepage;
