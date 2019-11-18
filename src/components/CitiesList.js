import React from 'react';
import {connect} from 'react-redux';
import City from './City';

const CitiesList = (props ) => (
    <div>
        {props.city}
    </div>
)


const MapStateToProps = (state) => {
    return {
         city: state.map(state => (
            <City key={state.id} city={state.city}></City>)
        )
    };
}

export default connect( MapStateToProps )(CitiesList)

