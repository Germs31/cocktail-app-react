import React from 'react'
import ShowPage from '../ShowPage'
import {Link} from 'react-router-dom'


class Profile extends React.Component{

    logOut = async () =>{
        try{
            fetch('http://localhost:3000/auth/logout')
                .then(res =>{
                    this.setState({
                        isLogged: false
                    })
                })

                this.props.history.push(`/`)

        }catch(err){
            console.log(err)
        }

    }


    

    
    render(){
        return(
            <div>
                <h3>Welcome, {this.props.userInfo.username}</h3>
                <button onClick={()=>this.logOut()}>Log Out</button>
                <Link to = {`/editUser/${this.props.userInfo._id}`}>Edit</Link> 

                <ShowPage/>

            </div>
        )
    }
}

export default Profile 