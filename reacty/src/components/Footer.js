import { Link } from "react-router-dom";

const Footer = () => {

    let today = new Date();
    return ( 
        // <div className="footer-page">
        //     <nav>
        //         <Link to="/Header">Top</Link>
        //         <h2>The footer</h2>
        //     </nav>
        // </div>
        <footer className="container">
            <div className="row-justify-content-center mt-3 mt4">
                <div className="col-8">
                    <h5>Team Allocation App - {today.getFullYear()}</h5>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;