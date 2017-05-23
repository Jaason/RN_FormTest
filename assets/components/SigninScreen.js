import React from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form,
    FormGroup,
    Input,
    Label,
    Switch
} from 'react-native-clean-form';

const FormView = props => (
    <Form>
        <FieldsContainer>
            <Fieldset label="Contact details">
                <FormGroup>
                    <Label>First name</Label>
                    <Input placeholder="Esben" onChangeText={this.onFirstNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
                </FormGroup>
            </Fieldset>
            <Fieldset label="Password" last>
                <FormGroup>
                    <Label>Password</Label>
                    <Input placeholder="Enter a password" onChangeText={this.onPasswordChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Repeat password</Label>
                    <Input placeholder="Repeat your password" onChangeText={this.onRepeatPasswordChange} />
                </FormGroup>
                <FormGroup border={false}>
                    <Label>Save my password</Label>
                    <Switch onValueChange={this.toggleSaveMyPassword} />
                </FormGroup>
            </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
            <Button onPress={this.save}>Save</Button>
        </ActionsContainer>
    </Form>
)

export default class SigninScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Sign in`,
    });
    render() {
        return (

                <FormView></FormView>
        
        );
    }
}
