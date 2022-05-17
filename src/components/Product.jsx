import React from 'react';

function Product({ all, sendFunc }) {
    return (
        <div>
            <div className="product-card" key={all.id}>
                <div className="card-image">
                    <img src={`./img/${all.image}`} alt={all.title} />
                </div>
                <div className="card-data">
                    <div className="card-title">{all.title}</div>
                    <div className="card-desc">{all.desc}</div>
                    <div className="card-price">Price: {all.price}$</div>
                    <div className="card-button" onClick={() => sendFunc(all)}>ADD TO CART <i className='fas fa-cart-plus'></i></div>
                </div>
            </div>
        </div>
    );
}

export default Product;