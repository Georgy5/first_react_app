import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import App from './App';
import configureStore from './state/store/configureStore';

// import ConnectedComponent from './ConnectedComponent';
import HookedComponent from './HookedComponent';
import GreetingDisplay from './GreetingDisplay';

const store = configureStore();
// for manual debugging in the Browser DevTools console
// window.store = store;
window.store = store;

ReactDOM.render(
    <Provider store = {store}>
        <GreetingDisplay />
        <HookedComponent />
    </Provider>,
    document.getElementById('root')
);

// For demoing the Hooks and connect APIs,
// comment out the new root API
/*
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);
*/