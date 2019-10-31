// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// Pages
import { Login, Signup, Feed, Profile, NewPassword } from '../pages';

import { book } from './book';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated')
    }
}

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        return this.props.isAuthenticated ? (
            <Switch>
                <Route component={ Feed } path={ book.feed }/>
                <Route component={ Profile } path={ book.profile }/>
                <Route component={ NewPassword } path={ book.newPassword }/>
                <Redirect to={ book.feed }/>
            </Switch>
        ) : (
            <Switch>
                <Route component={ Login } path={ book.login }/>
                <Route component={ Signup } path={ book.signup }/>
                <Redirect to={ book.login }/>
            </Switch>
        )
    }
}
