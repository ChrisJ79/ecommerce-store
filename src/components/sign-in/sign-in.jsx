import React, {Component} from 'react';
import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import './sign-in.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }



handleSubmit = event => {
    event.preventDefault();
}

handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value})
}

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an email account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
