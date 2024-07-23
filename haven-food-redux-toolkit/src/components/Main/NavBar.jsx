import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../assets/accessories/cart.gif';
import { useSelector } from 'react-redux';

function NavBar(props) {
   const cartModelRef = useRef(null);
   const {cart} = useSelector((state) => state.cartReducer);

   const openCartModel = () => {
    cartModelRef.current.showModal();
   }

    return (
     <nav className='bg-gray-800 p-4'>
       <div className="container mx-auto flex justify-between items-center">
         <div className='text-white text-xl'>
            <Link to='/' className='text-white'>haven food</Link>
         </div>
         <div >
          <button className='text-white px-4 py-2 rounded hover:bg-gray-700 flex align-middle space-x-3'
          onClick={openCartModel}
          >           
             <img src={Cart} alt="cart" className='w-10'/> <h1 className='text-2xl'>Cart ({cart.items.length})</h1>         
          </button>

         </div>
       </div>
        <dialog id="my_modal_3" className="modal" ref={cartModelRef} >
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="text-lg font-bold">Cart Items</h3>
            <div className="py-4">
                {cart.items.length > 0 ? (
                    cart.items.map(item => (
                        <div key={item.id} className="flex justify-between mb-2">
                            <span>{item.name}</span>
                            <span>{item.quantity} x ${item.price.toFixed(2)}</span>
                            <span>${item.total.toFixed(2)}</span>
                        </div>
                    ))
                ) : (
                    <p>No items in cart.</p>
                )}
            </div>
            <p className="py-4 font-bold">Grand Total: ${cart.grandTotal.toFixed(2)}</p>
          </div>
        </dialog>
     </nav>
    );
}

export default NavBar;
