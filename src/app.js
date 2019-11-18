import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addCity } from './Ducks/weatherDuck'; 
import configureStore from './Store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addCity({cityAdded:'paris'}));
store.dispatch(addCity({cityAdded:'mexico'}));

// store.dispatch(resetList());

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);

