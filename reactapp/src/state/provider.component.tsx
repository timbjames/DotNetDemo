import { EnhancedStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

interface IProviderWrapper {
    store: EnhancedStore;
}

const ProviderWrapper: React.FC<IProviderWrapper> = ({ children, store }) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default ProviderWrapper;