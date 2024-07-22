import React, { useContext } from 'react';
import egg from '../../assets/accessories/unsplash-egg.jpg';
import tartare from '../../assets/accessories/tartare.jpg';
import oysters from '../../assets/accessories/unsplash-oysters.jpg';
import polenta from '../../assets/accessories/unsplash-polenta.jpg';
import { CartContext } from '../../mycontext/CartContext';

function Menu(props) {
    const {addToCart,removeFromCart,getItemQuantity} = useContext(CartContext);
    const menuItemsList = [
        {
            id: 'i1',
            qty: 0,
            category: 'savory',
            title: 'Caviar Deviled Eggs',
            image: egg,
            price: 22.99,
            description: 'A pleasant experience waiting to happen. The salty caviar teams up with the devily goodness of the egg. Half-dozen per order.'
        },
        {
            id: 'i2',
            qty: 0,
            category: 'savory',
            title: 'Oyster bucket',
            image: oysters,
            price: 42.993892,
            description: "It's a bucket of Oysters as fresh as you are. Comes with lemons and cocktail sauce"
        },
        {
            id: 'i3',
            qty: 0,
            category: 'savory',
            title: 'Wagyu Tartare',
            image: tartare,
            price: 69.99,
            description: "Almost too good, but we won't apologize for it. Comes with two quail eggs on top"
        },
        {
            id: 'i4',
            qty: 0,
            category: 'savory',
            title: 'Oxtail Polenta',
            image: polenta,
            price: 33.36,
            description: "High-end comfort food. Savory oxtail + bone marrow paired with a rich, smooth polenta. Serves 2, if you want it to."
        }
    ];

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl font-bold text-center mb-8 text-yellow-500'>HavenFood Menu</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {menuItemsList.map((item) => (
                    <div key={item.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
                        <img src={item.image} alt={item.title} className='w-full h-48 object-cover'/>
                        <div className='p-4'>
                            <h2 className='text-2xl font-bold mb-2'>{item.title}</h2>
                            <p className='text-gray-700 mb-4'>{item.description}</p>
                            <p className='text-xl font-semibold text-red-600 mb-4'>${item.price.toFixed(2)}</p>
                            <div className='flex items-center'>
                                <button className='bg-red-600 text-white px-4 py-2 rounded-l-lg' 
                                onClick={()=>addToCart(item)}>+</button>
                                <span className='px-4 py-2 border-t border-b'>{getItemQuantity(item.id)}</span>
                                <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg'
                                onClick={()=>removeFromCart(item.id)}>-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
