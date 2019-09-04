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
    
    handleSubmit = async (e) => {
        e.preventDefault()
    
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('name', this.state.name)
        data.append('password', this.state.password);
        data.append('email', this.state.email);
    
        console.log(data.entries(), ' this is data')
        for (let pair of data.entries()){
          console.log(pair[0]  ,', ', pair[1])
        }
    
        const registerCall = this.props.register(data);
    
        registerCall.then((data) => {
          console.log(data)
            if(data.status.message === "Success"){
              this.props.history.push('/profile')
            } else {
              console.log(data, ' errrrrorrrrr')
            }
        })
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