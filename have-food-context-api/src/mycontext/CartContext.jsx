import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        items: [],
        grandTotal: 0,
    });

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.items.findIndex((i) => i.id === item.id);
            let updatedItems;

            if (existingItemIndex !== -1) {
                updatedItems = prevCart.items.map((i, index) =>
                    index === existingItemIndex
                        ? { ...i, quantity: i.quantity + 1, total: (i.quantity + 1) * i.price }
                        : i
                );
            } else {
                updatedItems = [...prevCart.items, { ...item, quantity: 1, total: item.price }];
            }

            const newGrandTotal = updatedItems.reduce((sum, i) => sum + i.total, 0);

            return { items: updatedItems, grandTotal: newGrandTotal };
        });
        toast.success('Item added to cart');
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items
                .map((item) => (item.id === itemId ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price } : item))
                .filter((item) => item.quantity > 0);

            const newGrandTotal = updatedItems.reduce((sum, i) => sum + i.total, 0);

            return { items: updatedItems, grandTotal: newGrandTotal };
        });
        toast.info('Item removed from cart');
    };

    const getItemQuantity = (itemId) => {
        const item = cart.items.find((item) => item.id === itemId);
        return item ? item.quantity : 0;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,getItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
