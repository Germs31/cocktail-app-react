import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Profile from './Profile'
import Login from './Login'
import EditUser from './EditUser'
import NavBar from './NavBar'
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'

const My404 = () =>{
  return (
    <div>
      Go home, you're drunk
    </div>
    )
}


class App extends React.Component {
  state = {
    user: null,
    loading: true,
    isLogged: false
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
          user: parsedResponse.foundUser,
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
      console.log(parsedResponse, 'this is my data')

      this.setState({
        user: parsedResponse.data,
        loading: false
      })

      return parsedResponse

    }catch(err){
      console.log(err)
    }
  }

  update = async(data) =>{
    try{
        const user = await fetch(`http://localhost:3000/user/${this.state.user._id}`,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const parsedUser = await user.json()
        console.log(parsedUser, 'parsed user')

        this.setState({
          user: {...this.state.user, ...parsedUser.data},
          loading: false
        })

        return parsedUser

    }catch(err){
        console.log(err)
    }
}

delete = async () =>{
  try{
      const deletedUser = fetch(`http://localhost:3000/user/${this.state.user._id}`, {
        method: "DELETE"
      })

      const parsedDelete = await deletedUser.json()
      console.log(parsedDelete, 'deleteddddd')

      this.setState({
        loading:false
      })
          

      this.props.history.push(`/`)

  }catch(err){
      console.log(err)
  }

}


  updateUser = (newUser) => {
    console.log(newUser)
    this.setState({
      user: newUser
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} logIn={this.login}/>}/>
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            
            {
              this.state.user
                ? [<Route exact path="/editUser/:id" render={(props) => <EditUser updateUser={this.updateUser}{...props} update={this.update} delete={this.deleteUser}/>} />,<Route exact path="/profile" render={(props) => <Profile {...props} userInfo={this.state.user}/>} />]
                : <Redirect to='/'/>
            }
            
            <Route component={My404}/>
          </Switch>
        </main>     
      </div>
    )
  }
}

export default withRouter(App);
