import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducers  from 'StoreRedux/reducers';
import App from 'components/App/App';

const store = createStore(reducers);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')

)
