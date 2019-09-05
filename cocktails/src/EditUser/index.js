import React from 'react'
import { Button, Form, Grid, Segment, GridColumn, Input } from 'semantic-ui-react'


class EditUser extends React.Component{
    state={
        username:'',
        name: '',
        email: '',
        password:'',
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


   
    render(){
        return(
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
              <GridColumn style={{ maxWidth: 450 }}>
                <Form onSubmit={this.handleEditSubmit}>
                    <Segment>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' type='text' name='name' onChange={this.handleChange} value={this.state.name}/>                        
                    <Form.Input fluid icon='mail' iconPosition='left' placeholder='Email' type='text' name='email' onChange={this.handleChange} value={this.state.email}/>                        
                    <Form.Input fluid icon='key' iconPosition='left' placeholder='Password' type='text' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <Button type="submit">Edit</Button>
                    <Button type="button" onClick={}>Delete</Button>
                    </Segment> 
                </Form>
              </GridColumn>
            </Grid>
        )
    }
    
}

export default EditUser