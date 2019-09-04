import React from 'react'

class Profile extends React.Component{
    state={
        id:'',
        username: '',
        email: ''
    }

    logOut = () =>{
        localStorage.clear();
        window.location.href = '/';
    }
    
    render(){
        return(
            <div>
                <h3>Welcome, {this.props.userInfo.username}</h3>
                <button onClick={()=>this.logOut()} type="button">Log Out</button>
            </div>
        )
    }
}

export default Profile 