import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Segment, GridColumn, Header } from 'semantic-ui-react'


class EditUser extends React.Component{
    state={
        user: {}
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const id = this.props.match.params.id
        try {
            const user = await (await fetch (`${process.env.REACT_APP_BACKEND_URL}user/${id}`)).json()
            this.setState({
                ...user.data
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleEditSubmit = (e) => {
        e.preventDefault()
        const update = this.props.update(this.state)
        update.then(() => {this.props.history.push('/profile')})

    }

    delete = async() =>{
        const deleteResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}user/${this.state._id}`,{
            method:"DELETE"
        })
        const parsedResponse = await deleteResponse.json()
        console.log(parsedResponse)
        if (parsedResponse.status.message === true){
            this.props.updateUser(null)
            this.props.history.push('/')
        }
    }

   
    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <GridColumn style={{ maxWidth: 450 }}>
                <Header as="h1">Update Information</Header>
                <Form onSubmit={this.handleEditSubmit}>
                    <Segment>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' type='text' name='name' onChange={this.handleChange} value={this.state.name}/>                        
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='text' name='email' onChange={this.handleChange} value={this.state.email}/>                        
                    <Form.Input fluid icon='key' iconPosition='left' placeholder='Password' type='text' name='password' onChange={this.handleChange}/>
                    <Button type="submit">Edit</Button>
                    <Button type="button" onClick={this.delete}>Delete</Button>
                    </Segment> 
                </Form>
              </GridColumn>
            </Grid>
        )
    }
    
}

export default withRouter(EditUser)