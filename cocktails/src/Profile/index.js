import React from 'react'

class Profile extends React.Component{
    state={
        id:'',
        username: '',
        email: ''
    }
    render(){
        return(
            <h3>Welcome, {this.props.userInfo.username}</h3>
        )
    }
}

export default Profile 