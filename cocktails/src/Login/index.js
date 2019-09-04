import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    state={
        username:'',
        password:''
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const login = this.props.logIn(this.state)
        login.then(() => {this.props.history.push('/profile')})

    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange}/>
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange}/>
                <button type="submit">Login</button>
                <Link to='/register'>Register</Link>
            </form>
        )
    }
}

export default Login