import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators'
import{ ajax } from 'rxjs/ajax';
import {updateCity} from './../Ducks/weatherDuck'


//==== AQUI VA  

    // const key = 

//==========

export const epicCity = action$ => action$.pipe(
    ofType('app/reducer/ADDCITY'),
    mergeMap( action =>
       ajax.getJSON(`http://api.weatherstack.com/current?access_key=${key}&query=${action.cityAdded}&units=m`).pipe(
            map(response => updateCity(action.cityAdded, {temp:response.current.temperature, description: response.current.weather_descriptions[0]} )  )
        )    
    )
)