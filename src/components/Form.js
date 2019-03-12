import React, {Component} from "react";
import {FormErrors} from "./FormErrors";
import {debounce} from "lodash"

const waitTime = 500;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'hello@gmail.com',
            username: '',
            formErrors: {email: '', username: ''},
            emailValid: true,
            usernameValid: false,
            formValid: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
            usernameValid: false,
            formErrors: {...this.state.formErrors, username: 'Hold tight...Checking availability of'}
        }, () => this.validateField({name, value}));
    }

    validateField = debounce(({name, value}) => {
        switch (name) {
            case 'username': {
                switch (value) {
                    case '':
                        this.setState({formErrors: {...this.state.formErrors, username: ''}});
                        break
                    case 'Hi':
                    case 'Hello':
                        this.setState({
                            usernameValid: true,
                            formErrors: {...this.state.formErrors, username: 'is availability'},

                        }, this.validateForm)
                        break
                    default:
                        this.setState({
                            formErrors: {...this.state.formErrors, username: 'is already taken'}
                        }, this.validateForm)
                        break
                }
            }
                break;
            default:
                break;
        }
    }, waitTime);

    validateForm() {
        this.setState({
            formValid:
                this.state.emailValid &&
                this.state.usernameValid
        }, () => { this.props.updateDisabledButton(this.state.formValid)});
    }

    render() {
        return (
            <form className="myForm">
                <div className="contact">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" defaultValue={this.state.email}/>

                    <label htmlFor="name">Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleUserInput}/>

                    <FormErrors formErrors={this.state.formErrors} value={this.state.username}/>
                </div>
            </form>
        );
    }
}

export default Form;
