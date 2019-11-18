import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../components/Header';
import HomePage from '../components/HomePage';
import WeatherItem from '../components/WeatherItem';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container widget">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/city/:id" component={WeatherItem}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;