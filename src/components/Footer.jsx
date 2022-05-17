import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-menu">
                    <nav className="footer-category">
                        <h4 className='footer-heading'>SHOP</h4>
                        <div className="list">
                            <div className="item">
                                <a className='link' href="">Women</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Devided</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Men</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Baby</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Kids</a>
                            </div>
                        </div>
                    </nav>
                    <nav className="footer-category">
                        <h4 className='footer-heading'>CORPORATE INFO</h4>
                        <div className="list">
                            <div className="item">
                                <a className='link' href="">Career at H&M</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">About H&M group</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Sustainability</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">press</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Investor Relations</a>
                            </div>
                        </div>
                    </nav>
                    <nav className="footer-category">
                        <h4 className='footer-heading'>HELP </h4>
                        <div className="list">
                            <div className="item">
                                <a className='link' href="">Customer Service</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">My Account</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Find a Store</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Legal & Privacy</a>
                            </div>
                            <div className="item">
                                <a className='link' href="">Contact</a>
                            </div>
                        </div>
                    </nav>
                    <section>
                        <div className="footer-heading">Become a member</div>
                        <p className='text'>Join now and get 10% off your next purchase!</p>
                        <div className="reed-more">
                            REED MORE <i className='fas fa-arrow-right'></i>
                        </div>
                    </section>
                </div>
                <div className="footer-icons">
                    <a href="#"><i className='fab fa-facebook'></i></a>
                    <a href="#"><i className='fab fa-twitter'></i></a>
                    <a href="#"><i className='fab fa-instagram'></i></a>
                    <a href="#"><i className='fab fa-youtube'></i></a>
                </div>
                <div className="copyright">
                    COPYRIGHT 2022 MOBINHAGHVERDI.IR
                </div>
            </div>
        </div>
    );
}

export default Footer;