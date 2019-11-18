import uuid from "uuid";

const ADDCITY = 'app/reducer/ADDCITY';
const DELETECITY = 'app/reducer/DELETECITY';
const UPDATECITY = 'app/reducer/UPDATECITY';
const RESET = 'app/reducer/RESET';

const cityReducerDefaultstate = [];

export default function reducer ( state = cityReducerDefaultstate, action )  {
    switch (action.type) {
        case ADDCITY:
            return [
                ...state,
                {
                    id:action.id,
                    city: action.cityAdded
                }
            ];
            
        case DELETECITY:
            return state.filter( state => state.city != action.cityDeleted )
              
        case UPDATECITY:
            return state.map( (state) =>{
                if (state.city === action.city) {
                    return{
                        ...state,
                        ...action.updates
                    }
                }else{
                    return state
                }
                
            } ) 

        case RESET :
            return state = []
        
        default:
            return state;     
    }

};


export function addCity({cityAdded = 'default'} = {}){
    return {
        type: ADDCITY,
        id: uuid(),
        cityAdded  
    }
}

export function deleteCity({cityDeleted = 'default'} = {}){
    return {
        type: DELETECITY,
        cityDeleted
    }
}

export function resetList(){
    return {
        type: RESET
    }
}

export function updateCity(city, updates){
    return {
        type: UPDATECITY,
        city,
        updates
    }
}
