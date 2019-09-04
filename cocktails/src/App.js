import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Profile from './Profile'
import Login from './Login'
import { Route, Switch, withRouter } from 'react-router-dom'

const My404 = () =>{
  return (
    <div>
      Go home, you're drunk
    </div>
    )
}


class App extends React.Component {
  state = {
    username: '',
    email: '',
    loading: true,
    id: ''
  }

  login = async (loginInfo) =>{
    try {
      const loginResponse = await fetch (`http://localhost:3000/auth/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      localStorage.setItem("user", JSON.stringify(parsedResponse.foundUser))
      console.log(parsedResponse, 'this is my logindata')
      this.setState(() => {
        return {
          ...parsedResponse.foundUser,
          loading: false
        }
      })

      return parsedResponse


    } catch (err){
      console.log('wronggg')
      console.log(err)
    }
  }
  

  register = async (data) =>{
    console.log(data)
    try{
      const registerResponse = await fetch(`http://localhost:3000/auth/register`,{
        method: 'POST',
        credential: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("done reg")
      const parsedResponse = await registerResponse.json()
      localStorage.setItem("user", JSON.stringify(parsedResponse.data))

      console.log(parsedResponse, 'this is my data')

      this.setState({
        ...parsedResponse.createdUser,
        loading: false
      })

      return parsedResponse

    }catch(err){
      console.log(err)
    }
  }


  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} logIn={this.login}/>}/>
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            <Route exact path="/profile" render={(props) => <Profile {...props} userInfo={this.state}/>}/>
            <Route component={My404}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App);
