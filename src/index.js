import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ConnectedComponent from './ConnectedComponent';
import HookedComponent from './HookedComponent';
import { Provider } from 'react-redux';
import configureStore from './state/store/configureStore';


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