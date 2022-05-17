
import { Link } from "react-router-dom";
import "./MainHome.css";

const SecMain = () => {
    return (
        <div className="main-home sec-home">
            <div className="main-data">
                <div className="main-title">
                    <span>SHOPPING WITH GOOD <span>FEELING</span></span>
                </div>
                <div className="main-desc">
                    Start Shopping Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi dolorem doloremque magni! Optio, blanditiis vitae quam <br /> praesentium reiciendis dolor reprehenderit...
                </div>
                <div className="main-btn">
                    <Link to="/products">Start Shopping <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="main-hero sec-hero">
                <img src="./img/hero-2.jpg" alt="" />
            </div>
        </div>
    );
}

export default SecMain;