/**
 * Sample React Native Form App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './assets/components/HomeScreen';
import LoginScreen from './assets/components/LoginScreen';
import SigninScreen from './assets/components/SigninScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
    Signin: { screen: SigninScreen }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
