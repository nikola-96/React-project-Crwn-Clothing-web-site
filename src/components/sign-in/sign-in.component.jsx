import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        try {
            const { email, password } = this.state
            await auth.signInWithEmailAndPassword(email, password)

        } catch (error) {
            console.error(error)
        }

        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        /*na ovaj nacin kada se svaki put unese vrednost u samo polje poziva se ova fnj i uzimaju se dve const
        gde jedna izvlaci vrednost, a druga ime samog polja. Kada pozivamo set state na osnovi imena polja u kojem se unosi text
        u taj objekat unosim vrednost iz tog polja */
        const { value, name } = event.target

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already havea an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label="email"
                        handleChange={this.handleChange}
                    />

                    <FormInput name="password"
                        type="password"
                        value={this.state.password}
                        required
                        label="password"
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit" >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}Sign in with Google{''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn