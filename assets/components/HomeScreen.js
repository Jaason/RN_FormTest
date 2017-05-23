import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <Image source={require('../images/bg.jpg')} style={styles.bg} />

                <Image source={require('../images/logo.png')} style={styles.logo} />

                <Button
                    onPress={() => navigate('Login')}
                    title="Log in"
                    color="#4EA0CC"
                />

                <Button
                    onPress={() => navigate('Signin')}
                    title="Sign in"
                    color="#A82237"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFEF8',
    },
    bg: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'stretch',
    },
    logo: {
        width: 150,
        height: 150
    }
});