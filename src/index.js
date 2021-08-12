import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './state/store/configureStore';

import ConnectedComponent from './ConnectedComponent';
import HookedComponent from './HookedComponent';

const store = configureStore();
// for manual debugging: window.store = store;
window.store = store;

const root = ReactDOM.createRoot(
    <Provider store = {store}>
        <ConnectedComponent />
        <HookedComponent />
    </Provider>,
    document.getElementById('root')
);

root.render(<App />);