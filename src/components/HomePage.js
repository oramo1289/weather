import React from 'react';
import CitiesList from './CitiesList'
import { addCity } from './../Ducks/weatherDuck';
import { connect } from 'react-redux';


class HomePage extends React.Component{
    constructor(props){
        super(props)


        this.handleSummit = this.handleSummit.bind(this)
    }

    handleSummit(e){
        e.preventDefault();
        
        const city = e.target.elements.city.value.trim();
        this.props.dispatch(addCity({cityAdded: city}));
        e.target.elements.city.value = '';

    }

    render(){
        return(
            <div>
                <CitiesList/>
                <form className="add-option" onSubmit={this.handleSummit}>
                    <input className="add-option__input" type="text" name="city"/>
                    <button className="button">Add City</button>
                </form>
            </div>
        );
    };
}

export default connect()(HomePage);

