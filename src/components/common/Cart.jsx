import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getTotal, increment, removeFromCart } from '../../redux/slices/cartSlice';

const Cart = () => {


    const cartItems = useSelector(state => state.cart.cartItems);
    const cartTotalPrice = useSelector(state => state.cart.cartTotalAmount);
    const cartTotalQuantity = useSelector(state => state.cart.cartTotalQuantity);

    const dispatch = useDispatch();


    // handling remove from cart by dispatching
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
        dispatch(getTotal())
    }
    // habdle increment by dispatching id to reducer
    const handleIncrement = (id) => {
        dispatch(increment(id))
        dispatch(getTotal())

    }
    // handle decrement by dispatching id to reducer
    const handleDecrement = (id) => {
        dispatch(decrement(id))
        dispatch(getTotal())


    }

    useEffect(() => {
        dispatch(getTotal());
    }, [])


    return (
        <div className='cart'>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartTotalQuantity === 0
                        ?
                        <tr className='error'>
                            <td colSpan={4}>There Is No Product <i className='fas fa-info-circle'></i></td>
                        </tr>
                        :
                        cartItems.map(item => {

                            return (
                                <tr key={item.id} >
                                    <td><img src={`./img/${item.image}`} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td><button disabled={item.cartQuantity <= 1 ? true : false} className='in-dec' onClick={() => handleDecrement(item.id)}><i className={item.cartQuantity <= 1 ? ` disabled-red fa-solid disable decrement fa-circle-minus` : `fa-solid disable decrement fa-circle-minus`}></i></button> {item.cartQuantity} <button className='in-dec' onClick={() => handleIncrement(item.id)}><i className="fa-solid increment fa-circle-plus"></i></button></td>
                                    <td><i className="fa-solid fa-trash-can" onClick={() => handleRemove(item.id)}></i></td>
                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td className='total-price' colSpan={4}>
                            <div className='t-price'>Total Price = {cartTotalPrice} $</div>
                            <div className='payment-btn'><a href="#">Payment <i className="fa-solid fa-credit-card"></i></a></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Cart;