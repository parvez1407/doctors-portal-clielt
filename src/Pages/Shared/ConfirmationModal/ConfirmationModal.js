import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successAction, modalData, successButtonName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4 text-red-600">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-error text-gray-50 btn-sm">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline btn-sm hover:bg-slate-500'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;