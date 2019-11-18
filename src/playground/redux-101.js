import { createStore, applyMiddleware } from 'redux';
import uuid from "uuid";
import { of, from } from 'rxjs';
import{ ajax } from 'rxjs/ajax';
import { map, flatMap, mergeMap } from 'rxjs/operators'
import { createEpicMiddleware, ofType } from 'redux-observable';



const addCity = ( {cityAdded = 'default'} = {} ) =>({
    type: 'ADDCITY',
    id:uuid(),
    cityAdded
});

const updateCity = ( city, updates ) =>({
    type: 'UPDATECITY',
    city,
    updates
});

const deleteCity = ( {cityDeleted = 'default'} = {} ) =>({
    type: 'DELETECITY',
    cityDeleted
});

const resetList = () => ({
    type: 'RESET'
})

const cityReducerDefaultstate = [];

const countReducer =  ( state = cityReducerDefaultstate, action ) => {
    switch (action.type) {
        case 'ADDCITY':
            console.log(action)
            return [
                ...state,
                {
                    id:action.id,
                    city: action.cityAdded
                }
            ];
            
        case 'DELETECITY':
            return state.filter( (state) => state.city !== action.cityDeleted ) 
        
        case 'RESET' :
            return state = []

        case 'UPDATECITY':
            return state.map( (state) =>{
                if (state.city === action.city) {
                    // return Object.assign({}, state, {
                    //     temp: action.updates.temp,
                    //     desciption: action.updates.desciption
                    //   })
                    return{
                        ...state,
                        ...action.updates
                    }
                }else{
                    return state
                }
                
            } ) 

        default:
            return state;    
    }

};



// const weatherAPiEnpoint = `http://api.weatherstack.com/current?access_key=eacc6ff5a7d521f713e79293d0a27e10& query=${'paris'}&units=m`;


const cityEpic = action$ => action$.pipe(
    ofType('ADDCITY'),
    mergeMap( action =>
        ajax.getJSON(`http://api.weatherstack.com/current?access_key=eacc6ff5a7d521f713e79293d0a27e10& query=${actions.cityAdded}&units=m`).pipe(
            map(response => updateCity(action.city, {temp:response.current.temperature, description: responseOne.current.weather_descriptions[0]}) )
        )    
    )
)


const epicMiddleware = createEpicMiddleware(cityEpic)

const store = createStore( countReducer, applyMiddleware(epicMiddleware) );
epicMiddleware.run(cityEpic)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addCity({ cityAdded:'paris' }));
store.dispatch(addCity({ cityAdded:'mexico' }));
// store.dispatch(updateCity( 'paris', {temp:'3', description:'cloudy' }));



// store.dispatch(deleteCity({ cityDeleted: 'mexico'}));

// store.dispatch(resetList());

// of(1, 2, 3, 'Hello', 'World').subscribe(value => console.log(value))

// from([1, 2, 3]).subscribe(console.log)
// ajax('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log)
// ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').subscribe(console.log)

// var obi =[
//     { name: 'oscar'},
//     {name: 'mau'},
//     {name: 'bere'}
// ];

// of(obi).pipe(
//     map( (i) => i[0])
// ).subscribe(console.log)



// https://pokeapi.co/api/v2/pokemon/ditto/

