import { createStore, applyMiddleware } from 'redux';
import reducer from './../Ducks/weatherDuck'

import { createEpicMiddleware, ofType } from 'redux-observable';
import {epicCity} from './../Epics/epicCity'


const epicMiddleware = createEpicMiddleware()


export default () => {
    const store = createStore(
        reducer,
       applyMiddleware(epicMiddleware)
    );
        
    epicMiddleware.run(epicCity)
    return store;
};