import React from 'react'
import {Link} from 'react-router-dom'
import { 
    Form, 
    Grid, 
    Header,  
    Message, 
    Segment, 
    Button, 
    Container
} from 'semantic-ui-react'
import { LoginDiv } from './style'


class Login extends React.Component{
    state={
        username:'',
        password:'',
        isLogged: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const login = this.props.logIn(this.state)
        login.then(() => {this.props.history.push('/profile')})

    }

    render(){
        return(
            
            <Container fluid>
                <Grid  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <LoginDiv textAlign='center'>
                                <h1>Here is a fun little site get ideas for drinks</h1>
                            </LoginDiv>
                        </Grid.Column>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Form onSubmit={this.handleSubmit}>
                                <Segment>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' type='text' name='username' onChange={this.handleChange}/>
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name='password' onChange={this.handleChange}/>
                                <Button color="teal" fluid size='large'>
                                    Login
                                </Button>
                                <Message>
                                    Not a member? <Link to='/register'>Register</Link>
                                </Message>
                                </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Login