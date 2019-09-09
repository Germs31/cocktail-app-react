import React from 'react'
import { Button, Item, Image, Container, Modal, Header } from 'semantic-ui-react'
import { ProShow } from './style'

class Profile extends React.Component{
    state = { open: false }

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

    open = () => this.setState({ open: true })

    close = () => this.setState({ open: false })


    

    render(){
        console.log(this.props.userInfo.cocktails, 'PROPS YOOOOOOO!')
        return(
            <Container fluid>
                
                {
                    (this.props.userInfo.cocktails.length === 0)
    
                    ?
    
                        <ProShow>
                            <h1>Lets add some drinks</h1>
                            <button onClick={()=>this.logOut()}>Log Out</button>
                        </ProShow>
    
                    :
    
                    <ProShow>
                        <h3>{this.props.userInfo.username}'s Drinks</h3>
                        <hr/>
                        <button onClick={()=>this.logOut()}>Log Out</button>
                            <Item.Group relaxed>
                                {
                                    this.props.userInfo.cocktails.map((c,i)=>{
                                        return(
                                            <Item key={i}>
                                                <Item.Image size="small" src={c.image}/>
                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header>{c.name}</Item.Header>
                                                        <Item.Description>{c.instructions}</Item.Description>
                                                        <Item.Extra>
                                                            <Button floated='right' onClick={()=>this.props.deleteFav(i)}>Delete</Button>
                                                        </Item.Extra>
                                                    </Item.Content>
                                            </Item>
        
                                        )
                                    })
                                }
                            </Item.Group>
                            <div>
                            <Button primary content='Open' onClick={this.open} />
                            <Modal open={this.state.open} onClose={this.close}>
                            <Modal.Content>
                                {
                                    this.props.userInfo.cocktails.map((c,i)=>{
                                        return(
                                            <Item key={i}>
                                                <Item.Image circular size="small" src={c.image}/>
                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header>{c.name}</Item.Header>
                                                        <Item.Description>
                                                            {c.instructions}
                                                            <br/>
                                                            <br/>
                                                            <br/>
                                                            {c.ingredient1},
                                                            {c.ingredient2},
                                                            {c.ingredient3},
                                                            {c.ingredient4},
                                                            {c.ingredient5},
                                                            {c.ingredient6},
                                                            {c.ingredient7},
                                                            {c.ingredient8},
                                                            {c.ingredient9},
                                                            {c.ingredient10},
                                                            {c.ingredient11},
                                                            {c.ingredient12},
                                                            {c.ingredient13},
                                                            {c.ingredient14},
                                                            {c.ingredient15}
                                                            <br/>
                                                            <br/>
                                                            <br/>
                                                            {c.mesurement1},
                                                            {c.mesurement2},
                                                            {c.mesurement3},
                                                            {c.mesurement4},
                                                            {c.mesurement5},
                                                            {c.mesurement6},
                                                            {c.mesurement7},
                                                            {c.mesurement8},
                                                            {c.mesurement9},
                                                            {c.mesurement10},
                                                            {c.mesurement11},
                                                            {c.mesurement12},
                                                            {c.mesurement13},
                                                            {c.mesurement14},
                                                            {c.mesurement15}
                                                        </Item.Description>
                                                        <Item.Extra>
                                                            <Button floated='right' onClick={()=>this.props.deleteFav(i)}>Delete</Button>
                                                        </Item.Extra>
                                                    </Item.Content>
                                            </Item>

                                        )
                                    })
                                }
                            </Modal.Content>
                            </Modal>
                        </div>
                        </ProShow>
                }
            </Container>
        )
    }
}

export default Profile 