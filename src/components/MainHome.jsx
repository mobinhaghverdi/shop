
import { Link } from "react-router-dom";
import "./MainHome.css";

const MainHome = () => {
    return (
        <div className="main-home">
            <div className="main-data">
                <div className="main-title">
                    <span>ENJOY <span>SHOPPING</span></span>
                </div>
                <div className="main-desc">
                    Start Shopping Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi dolorem doloremque magni! Optio, blanditiis vitae quam <br /> praesentium reiciendis dolor reprehenderit...
                </div>
                <div className="main-btn">
                    <Link to="/products">Start Shopping <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="main-hero">
                <img src="./img/hero.jpg" alt="" />
            </div>
        </div>
    );
}

export default MainHome;