import React from 'react';
import { deleteCity } from './../Ducks/weatherDuck';

import {connect} from 'react-redux';
import { Link } from 'react-router-dom'


class City extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            city:props.city
        } 

        this.handleDeleteCity = this.handleDeleteCity.bind(this); 
    }

    handleDeleteCity(e){
        e.preventDefault();
        this.props.dispatch(deleteCity({cityDeleted: this.state.city }))
    }

    render(){
        return (
            <div className="option">
                <Link className="option__text" to={`/city/${this.state.city}`}> {this.state.city} </Link>
                <button className="button button--link" onClick={ this.handleDeleteCity }> Delete </button>
            </div>
        );
    }
}


export default connect()(City);