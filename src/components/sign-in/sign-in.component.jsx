import React from 'react'

import './sign-in.style.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        /*na ovaj nacin kada se svaki put unese vrednost u samo polje poziva se ova fnj i uzimaju se dve const
        gde jedna izvlaci vrednost, a druga ime samog polja. Kada pozivamo set state na osnovi imena polja u kojem se unosi text
        u taj objekat unosim vrednost iz tog polja */
        const { value, name } = event.target

        this.setState({ [name]: value })
        console.log({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already havea an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input name="email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                    />

                    <label >Email</label>
                    <input name="password"
                        type="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                    />

                    <label>Password</label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default SignIn