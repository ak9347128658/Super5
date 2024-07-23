import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState = {
    cart:{
        items: [],
        grandTotal: 0,
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state,action) => {
          const item = action.payload;
          const existingItemIndex = state.cart.items.findIndex((i) => i.id === item.id);
          let updatedItems;

          if (existingItemIndex !== -1) {
              updatedItems = state.cart.items.map((i, index) =>
                  index === existingItemIndex
                      ? { ...i, quantity: i.quantity + 1, total: (i.quantity + 1) * i.price }
                      : i
              );
          } else {
              updatedItems = [...state.cart.items, { ...item, quantity: 1, total: item.price }];
          }

          const newGrandTotal = updatedItems.reduce((sum, i) => sum + i.total, 0);

          state.cart = { items: updatedItems, grandTotal: newGrandTotal };
        toast.success('Item added to cart');
       },
       removeFromCart: (state,action) => {
        const itemId = action.payload;

        const updatedItems = state.cart.items
        .map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price } : item))
        .filter((item) => item.quantity > 0);

        const newGrandTotal = updatedItems.reduce((sum, i) => sum + i.total, 0);

        state.cart = { items: updatedItems, grandTotal: newGrandTotal };
        toast.info('Item removed from cart');
       }
    }
});


export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;