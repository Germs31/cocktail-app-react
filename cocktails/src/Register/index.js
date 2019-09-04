import React from 'react'

class Register extends React.Component{
    state={
        username: '',
        name: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const registerCall = this.props.register(this.state);
        registerCall.then((data) => {this.props.history.push('/profile')})
    }


    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>username:</label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label>name:</label>
                <input name="name" type="text" onChange={this.handleChange}/>
                <label>email:</label>
                <input name="email" type="text" onChange={this.handleChange}/>
                <label>password:</label>
                <input name="password" type="text" onChange={this.handleChange}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Register 