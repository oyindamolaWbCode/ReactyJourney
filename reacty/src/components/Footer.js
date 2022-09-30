import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-page">
            <nav>
                <Link to="/Header">Top</Link>
                <h2>The footer</h2>
            </nav>
        </div>
     );
}
 
export default Footer;