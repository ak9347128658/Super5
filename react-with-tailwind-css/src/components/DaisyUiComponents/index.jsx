import React, { useRef, useState } from 'react';

function DaisyUiComponents(props) {
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.showModal();
    };


        return (
            <div className='h-screen w-screen grid place-content-center'>
                <button className="btn btn-outline btn-accent" onClick={openModal}>Open Modal</button>
                <dialog ref={modalRef} className="modal">
                    <div className="modal-box">
                         <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="username" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                        <button className="btn btn-primary">Login</button>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        );
}

export default DaisyUiComponents;