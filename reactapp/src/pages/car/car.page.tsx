import React from 'react';

import Details from '@features/car/details.component';

import toast from 'react-hot-toast';

const CarPage: React.FC = () => {

    let toastId = '';

    const success = () => toast.success('Hello world', { id: toastId });
    const error = () => toast.error('ERRORZ');
    const custom = () => toast.custom(<h1>Hello</h1>);
    const loading = () => {
        toastId = toast.loading('Wiating...');
    };
    const dismiss = () => toast.dismiss();

    return (
        <div>
            <h1>Cars</h1>

            <Details />

            <button type="button" onClick={success}>Success</button>
            <button type="button" onClick={error}>Error</button>
            <button type="button" onClick={custom}>Custom</button>
            <button type="button" onClick={loading}>Loading</button>
            <button type="button" onClick={dismiss}>Dismiss</button>

        </div>
    );
};

export default CarPage;