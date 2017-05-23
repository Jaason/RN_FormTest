import React, { Component } from 'react'
import { reduxForm } from 'redux-form/immutable'
import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form
} from 'react-native-clean-form';
import {
    Input,
    Select,
    Switch
} from 'react-native-clean-form/redux-form-immutable';
import { View, Text } from 'react-native';

const onSubmit = (values, dispatch) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(values.toJS())
            resolve()
        }, 1500)
    })
};

const validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

class FormView extends Component {
    render() {
        const { handleSubmit, submitting } = this.props

        return (
            <Form>
                <FieldsContainer>
                    <Fieldset label="Fill inputs with data">
                        <Input name="email" label="Email" placeholder="something@domain.com" />
                        <Input name="password" label="Password" placeholder="xxx" />
                    </Fieldset>
                </FieldsContainer>
                <ActionsContainer>
                    <Button onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
                </ActionsContainer>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'Form',
    validate: values => {
        const errors = {}

        values = values.toJS()
    
        if (!validateEmail(values.email)) {
            errors.email = 'Email is required.';
        }

        if (!values.password) {
            errors.password = 'Password is required.'
        }

        return errors
    }
})(FormView)

