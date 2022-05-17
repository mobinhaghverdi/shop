import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, getTotal } from '../redux/slices/cartSlice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Products.css"
import Product from './Product';
import "swiper/css/bundle"
import 'swiper/css/navigation';
const Products = () => {

    const data = [
        { id: 1, image: "pro-1.jpg", price: "320", title: "Feathered Blazer", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 2, image: "pro-2.jpg", price: "500", title: "Summer Dress", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 3, image: "pro-3.jpg", price: "650", title: "Limited Dress", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 4, image: "pro-4.jpg", price: "400", title: "Blazer Lapel ", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 5, image: "pro-5.jpg", price: "320", title: "Feathered Blazer", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 6, image: "pro-6.jpg", price: "500", title: "Summer Dress", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 7, image: "pro-7.jpg", price: "650", title: "Limited Dress", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
        { id: 8, image: "pro-8.jpg", price: "400", title: "Blazer Lapel ", desc: "Satin effect blazer with lapel collar. Long sleeves with removable tonal feathers with hidden buttons" },
    ]

    const dispatch = useDispatch();
    const handleAddToCart = (element) => {
        dispatch(addToCart(element))
        dispatch(getTotal())

    }

    return (
        <div className='products-container'>
            <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="products-title">
                Products
            </div>
            <div className='products' >

                {data.map(element => (

                    <Product key={element.id} all={element} sendFunc={handleAddToCart} />
                ))}


            </div>
        </div>
    );
}

export default Products;