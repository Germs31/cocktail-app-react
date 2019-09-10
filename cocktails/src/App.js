import React from 'react';
import './App.css';
import Register from './Register'
import Profile from './Profile'
import Login from './Login'
import EditUser from './EditUser'
import NavBar from './NavBar'
import { Route, Switch, withRouter, Redirect, NavLink } from 'react-router-dom'
import ShowPage from './ShowPage';
import { async } from 'q';

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
      const loginResponse = await fetch (`${process.env.REACT_APP_BACKEND_URL}auth/login`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, 'this is my logindata')
      this.setState(() => {
        return {
          user: parsedResponse.foundUser,
          loading: false
        }
      })

      return parsedResponse


    } catch (err){
      console.log(err)
    }
  }

  
  

  register = async (data) =>{
    console.log(data)
    try{
      const registerResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}auth/register`,{
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
        const user = await fetch(`${process.env.REACT_APP_BACKEND_URL}user/${this.state.user._id}`,{
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
      const deletedUser = fetch(`${process.env.REACT_APP_BACKEND_URL}user/${this.state.user._id}`, {
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

deleteFav = index =>{
  console.log(index, "hittin")
  const newList = this.state.user.cocktails.splice(index, 1)
  this.update(this.state.user)
}


  updateUser = (newUser) => {
    console.log(newUser)
    this.setState({
      user: newUser
    })
  }

  addToFavs = async(drinkData) => {
    try {
      const objData = {
          name: drinkData.drinkR[0].strDrink, 
          image: drinkData.drinkR[0].strDrinkThumb, 
          instructions: drinkData.drinkR[0].strInstructions,
          ingredient1: drinkData.drinkR[0].strIngredient1,
          ingredient2: drinkData.drinkR[0].strIngredient2,
          ingredient3: drinkData.drinkR[0].strIngredient3,
          ingredient4: drinkData.drinkR[0].strIngredient4,
          ingredient5: drinkData.drinkR[0].strIngredient5,
          ingredient6: drinkData.drinkR[0].strIngredient6,
          ingredient7: drinkData.drinkR[0].strIngredient7,
          ingredient8: drinkData.drinkR[0].strIngredient8,
          ingredient9: drinkData.drinkR[0].strIngredient9,
          ingredient10: drinkData.drinkR[0].strIngredient10,
          ingredient11: drinkData.drinkR[0].strIngredient11,
          ingredient12: drinkData.drinkR[0].strIngredient12,
          ingredient13: drinkData.drinkR[0].strIngredient13,
          ingredient14: drinkData.drinkR[0].strIngredient14,
          ingredient15: drinkData.drinkR[0].strIngredient15,
          mesurement1: drinkData.drinkR[0].strMeasure1,
          mesurement2: drinkData.drinkR[0].strMeasure2,
          mesurement3: drinkData.drinkR[0].strMeasure3,
          mesurement4: drinkData.drinkR[0].strMeasure4,
          mesurement5: drinkData.drinkR[0].strMeasure5,
          mesurement6: drinkData.drinkR[0].strMeasure6,
          mesurement7: drinkData.drinkR[0].strMeasure7,
          mesurement8: drinkData.drinkR[0].strMeasure8,
          mesurement9: drinkData.drinkR[0].strMeasure9,
          mesurement10: drinkData.drinkR[0].strMeasure10,
          mesurement11: drinkData.drinkR[0].strMeasure11,
          mesurement12: drinkData.drinkR[0].strMeasure12,
          mesurement13: drinkData.drinkR[0].strMeasure13,
          mesurement14: drinkData.drinkR[0].strMeasure14,
          mesurement15: drinkData.drinkR[0].strMeasure15,
      }
      const addedDrank = await fetch (`${process.env.REACT_APP_BACKEND_URL}user/${this.state.user._id}`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(objData),
          headers: {
          'Content-Type': 'application/json'
          }

      })
      const jsonUserDrank = await addedDrank.json()
      this.setState({
        user: jsonUserDrank
      })
      console.log(jsonUserDrank ,'<-- jsonuserdrank')
  } catch(err) {
      console.log(err)
  }
  }
  


  render(){
    return (
      <div className="App">
        <NavBar user={this.state.user}/>
        <main>
          <Switch>
            <Route exact path="/" render={(props) => <Login {...props} logIn={this.login}/>}/>
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            
            {
              this.state.user
                ? [<Route exact path="/editUser/:id" render={(props) => <EditUser updateUser={this.updateUser}{...props} update={this.update} delete={this.deleteUser}/>} />,
                <Route exact path="/profile" render={(props) => <Profile {...props} userInfo={this.state.user} deleteFav={this.deleteFav}/>} />, <Route exact path="/showPage" render={() => <ShowPage user={this.state.user} addToFavs={this.addToFavs}/>}/> ]
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
