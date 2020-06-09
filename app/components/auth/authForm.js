import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Platform
  } from 'react-native';
  import PropTypes from 'prop-types';
  import Input from '../../utils/forms/input';
  import ValidationRules from '../../utils/forms/validationRules';

export default class AuthForm extends Component {
    state = {
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form:{
            email:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    isEmail:true
                }
            },
            password:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    isRequired:true,
                    minLength:6
                }
            },
            confirmPassword:{
                value:"",
                valid:false,
                type:"textinput",
                rules:{
                    confirmPass:'password'
                }
            }
        }
    }

    formHasError = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Oops, check your info.</Text>
            </View>
        : null
    )

    confirmPassword = () => (
        this.state.type != 'Login' ?
        <Input 
            placeholder="Confirm your password"
            placeholderTextColor="#cecece"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            onChangeText={ (value) => this.updateInput("confirmPassword", value) }
            // overrideStyle={{}}
            secureTextEntry
        />
        : null
    )

    updateInput = (name, value) => {
        this.setState({
            hasErrors: false
        });

        let formCopy = this.state.form;
        formCopy[name].value = value;

        /// rules
        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);

        formCopy[name].valid = valid;

        this.setState({
            form: formCopy
        })
    }

    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;

        for(let key in formCopy) {
            if(this.state.type === 'Login') {
                /// LOGIN
                if(key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }
            } else {
                /// REGISTER
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }

        if(isFormValid) {
            if(this.state.type === 'Login') {
                alert(formToSubmit["email"]);
            } else {
                alert(formToSubmit);
            }
        } else {
            this.setState({
                hasErrors: true
            })
        }
    }

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to Login' : 'I want to register'
        })
    }

    render() {
        return (
            <View>
                <Input 
                    placeholder="Enter email"
                    placeholderTextColor="#cecece"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    autoCapitalize={"none"}
                    keyboardType={"email-address"}
                    onChangeText={ (value) => this.updateInput("email", value) }
                    // overrideStyle={{}}
                />
                <Input 
                    placeholder="Enter your password"
                    placeholderTextColor="#cecece"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}
                    onChangeText={ (value) => this.updateInput("password", value) }
                    // overrideStyle={{}}
                    secureTextEntry
                />

                {this.confirmPassword()}
                {this.formHasError()}

                <View style={{marginTop: 20}}>
                    <View style={styles.button}>
                        <Button 
                            title={this.state.action}
                            onPress={this.submitUser}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title={this.state.actionMode}
                            onPress={this.changeFormType}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title="I'll do it later"
                            onPress={this.props.method}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        ...Platform.select({
            ios:{
                marginBottom: 0
            },
            android:{
                marginTop: 10,
                marginBottom: 10,
            }
        })
    }
})