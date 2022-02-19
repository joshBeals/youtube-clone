import React from 'react';

const Spinner = () => {
    return(
        <div className='spinner'>
            <div className="d-flex justify-content-center">
                <div className='d-flex flex-column align-items-center'>
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5 className='mt-3 text-white'>Loading...</h5>
                </div>
            </div>
        </div>
    );
}

export default Spinner;