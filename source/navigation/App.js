// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import Private from './Private';
import Public from './Public';

import Loading from '../components/Loading';

import { authAction } from '../bus/auth/actions';
import { socketActions } from '../bus/socket/actions';

import { joinSocketChannel, socket } from '../init/socket';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized: state.auth.get('isInitialized'),
    }
}

const mapDispathToProps = {
    initializeAsync: authAction.initializeAsync,
    ...socketActions
}

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispathToProps)
export default class App extends Component {
    componentDidMount() {
        const { initializeAsync, listenConnection } = this.props;
        
        initializeAsync();
        listenConnection();
        joinSocketChannel();
    }

    componentWillUnmount() {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if(!isInitialized) {
            return <Loading/>;
        }

        return isAuthenticated ? <Private/> : <Public/>
    }
}
