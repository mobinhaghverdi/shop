import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



// setting initialsstate
const initialState = {
  // setting cart items by getting data from localstorage
  cartItems: localStorage.getItem("cartitems")
    ? JSON.parse(localStorage.getItem("cartitems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
// creating a slice for our cart
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // adding to the cart reducer
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // increase the quantity of the product
        state.cartItems[itemIndex].cartQuantity += 1;

      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // send a toast for showing the status
      }
      toast.success(`${action.payload.title} Added Successfully...`);
      // setting the data and added products to the localstorage
      localStorage.setItem("cartitems", JSON.stringify(state.cartItems));
    },

    // removing from the cart reducer
    removeFromCart: (state, action) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newCartItems;
      // setting new data to localstorage
      localStorage.setItem("cartitems", JSON.stringify(newCartItems));
    },

    increment: (state, action) => {
      // find the cart item by id that i've got
      let newCartItems = [...state.cartItems];

      let itemIndex = newCartItems.findIndex((x) => x.id === action.payload);
      newCartItems[itemIndex].cartQuantity += 1;
      // setting new data to localstorage
      localStorage.setItem("cartitems", JSON.stringify(newCartItems));
    },

    decrement: (state, action) => {
      // find the cart item by id that i've got
      let newCartItems = [...state.cartItems];

      let itemIndex = newCartItems.findIndex((x) => x.id === action.payload);

      newCartItems[itemIndex].cartQuantity -= 1;
      // setting new data to localstorage
      localStorage.setItem("cartitems", JSON.stringify(newCartItems));
    },
    getTotal: (state, action) => {
      // destructure two values from init value from reduce method
      let { total, quantity } = state.cartItems.reduce((cartTotal, item) => {
        // destructure price and quantity from item that im looping
        const { price, cartQuantity } = item;
        // get the item total price 
        const itemsTotal = price * cartQuantity;
        
        // set the new values to the init objects
        cartTotal.total += itemsTotal;
        cartTotal.quantity += cartQuantity;

        // return the init function
        return cartTotal;
      }, {
        // init values and objects
        total: 0,
        quantity: 0,
      })

      // set the state from the data that we have gotten
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, increment, decrement, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
