import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register'
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
    loading: true
  }

  register = async (data) =>{
    try{
      const registerResponse = await fetch(`http://localhost:3000/user/register`,{
        method: 'POST',
        credential: 'include',
        body: data,
        header: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json()
      localStorage.setItem("user", JSON.stringify(parsedResponse.data))

      console.log(parsedResponse)

      this.setState({
        ...parsedResponse.data,
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
            <Route exact path="/" render={(props) => <Register {...props} register={this.register} /> } />
            <Route component={My404}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App);
