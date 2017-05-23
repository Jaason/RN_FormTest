import React, { PropTypes } from 'react';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form/immutable';

import SimpleForm from './LoginForm';

const reducers = {
    form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class LoginScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Log in`,
    });
    render() {
        return (
            <Provider store={store}>
                <SimpleForm></SimpleForm>
            </Provider>
        );
    }
}
