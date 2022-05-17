import react, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./Nav.css";


const Nav = () => {


    const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity)
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    const wrapperRef = useRef(null);



    useEffect(() => {
        const handleScroll = e => {
            setScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        document.addEventListener("mousedown", handleClickOutside);


        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setNav(false)
            }
        }
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll)

        };
    }, [wrapperRef])




    return (
        <nav className={scrolled ? 'navbar active' : 'navbar'}>
            <div className="icon">
                <img src="./img/icon.svg" alt="zara" />
            </div>
            <ul ref={wrapperRef} className={nav ? 'active' : null}>
                <li><Link onClick={() => setNav(false)} to="/" >Home</Link></li>
                <li><Link onClick={() => setNav(false)} to="/products" >Women</Link></li>
                <li><Link onClick={() => setNav(false)} to="/products" >Man</Link></li>
            </ul>
            <div className="cart-icon">
                <i className="fas fa-shopping-cart"><span>{cartTotalQuantity}</span></i>
                <Cart />
            </div>
            <div className="nav-icon" ref={wrapperRef} onClick={() => setNav(!nav)}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
}

export default Nav;