import { connect } from 'react-redux';
import { Switch, withRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import React, { Component } from 'react';

import Home from '../scenes/Home/Home'
import Header from '../components/header'
import { RouteAuth } from '../router/route'

const ConnectedSwitch = connect()(Switch);

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <Header className="App-header" ></Header>
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}


const RouterContainer = withRouter(RouterApp);

export default RouterContainer;
