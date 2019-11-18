import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class WeatherItem extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLoading: true,
            temperature:'',
            description:'',
            backgroundImg:''
        }
    }
    componentDidMount(){

        //==== AQUI VA  

           // const unsplashkey = 
        
        //==========
        const unsplashApiEnpoint = `https://api.unsplash.com/search/photos?query=${this.props.match.params.id}&client_id=${unsplashkey}`;
        
         axios.get(unsplashApiEnpoint)
        .then(response => {

            let city = this.props.state.filter((state) => {
                return state.city === this.props.match.params.id
            });

            this.setState({
                isLoading:false,
                temperature: city[0].temp,
                description: city[0].description,
                backgroundImg: response.data.results[0].urls.small
            })

        }).catch(errors =>{
            console.error(errors)
        })
    }

    render(){

        const {isLoading,backgroundImg} = this.state
        const styleBgImg = {
            backgroundImage: 'url("'+backgroundImg+'")',
        }
        return(
            <div>
                {isLoading && <p className="loading">LOADING....</p>}
                {!isLoading && 
                    <div className="city" style={styleBgImg}>
                        <div className="city__weather">
                            <h3>{this.props.match.params.id.toUpperCase()}</h3>
                            <p>{this.state.temperature} C°</p>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
         state: state        
    }
}

export default connect( MapStateToProps )(WeatherItem)

