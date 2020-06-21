import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubimt = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert("Password doesen't match!")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName });

            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }


        } catch (error) {
            console.error(error)
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }) //!!!!!!! svaki put kad unesemo u polje vrednost na ovaj nacin se unosi vrednost u objekat

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your password</span>
                <form className="sign-up-form" onSubmit={this.handleSubimt}>
                    <FormInput
                        label="Display Name"
                        name="displayName"
                        type="text"
                        value={displayName}
                        onChange={this.handleChange}
                        required ></FormInput>
                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                        required></FormInput>
                    <FormInput
                        label='Password'
                        name="password"
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        required></FormInput>
                    <FormInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required></FormInput>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp