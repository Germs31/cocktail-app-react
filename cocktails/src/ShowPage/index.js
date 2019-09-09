import React from 'react'
import { Button, Image, Grid, GridColumn, } from 'semantic-ui-react'
import { ShowContainer } from './style'

class ShowPage extends React.Component{
    state ={
        drinkR:[]
    }
    
    componentDidMount(){
        this.getRandomDrink()
    }

    getRandomDrink = async () =>{
        try{
            const data = await fetch(`http://localhost:3000/cocktail/randomDrink`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const drinkData = await data.json()

            this.setState({
                drinkR: drinkData.random
            })

        }catch(err){
            console.log(err)
        }
    }

    addToFavs = async () =>{
        this.props.addToFavs(this.state)
        try{
            const data = await fetch(`http://localhost:3000/cocktail/randomDrink`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const drinkData = await data.json()

            this.setState({
                drinkR: drinkData.random
            })

        }catch(err){
            console.log(err)
        }
    }
    



    render(){
        console.log(this.state.drinkR)
        return(
            <div>
                <ShowContainer fluid>
                    <Grid>
                        <Grid.Row columns={3}>
                        <Grid.Column>
                                {
                                    this.state.drinkR.map((d,i)=>{
                                        return(
                                            <div key={i}>
                                                <h1>Ingredients</h1>
                                                <hr/>
                                                <h3>{d.strIngredient1}</h3>
                                                <h3>{d.strIngredient2}</h3>
                                                <h3>{d.strIngredient3}</h3>
                                                <h3>{d.strIngredient4}</h3>
                                                <h3>{d.strIngredient5}</h3>
                                                <h3>{d.strIngredient6}</h3>
                                                <h3>{d.strIngredient7}</h3>
                                                <h3>{d.strIngredient8}</h3>
                                                <h3>{d.strIngredient9}</h3>
                                                <h3>{d.strIngredient10}</h3>
                                                <h3>{d.strIngredient11}</h3>
                                                <h3>{d.strIngredient12}</h3>
                                                <h3>{d.strIngredient13}</h3>
                                                <h3>{d.strIngredient14}</h3>
                                                <h3>{d.strIngredient15}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </Grid.Column>
                            
                            <Grid.Column>
                                {
                                    this.state.drinkR.map((d,i)=>{
                                        return(
                                            <div key={i}>
                                                <h1>{d.strDrink}</h1>
                                                <Image circular centered size='medium' src={d.strDrinkThumb}/>
                                                <h3>{d.strInstructions}</h3>
                                                <Button type="submit" onClick={this.addToFavs}>Add To Favs</Button>
                                                <Button onClick={() =>this.getRandomDrink()}>Random</Button>
                                            </div>
                                        )
                                    })
                                }
                            </Grid.Column>
                           
                            <Grid.Column>
                                {
                                    this.state.drinkR.map((d,i)=>{
                                        return(
                                            <div key={i}>
                                                <h1>Measurements</h1>
                                                <hr/>
                                                <h3>{d.strMeasure1}</h3>
                                                <h3>{d.strMeasure2}</h3>
                                                <h3>{d.strMeasure3}</h3>
                                                <h3>{d.strMeasure4}</h3>
                                                <h3>{d.strMeasure5}</h3>
                                                <h3>{d.strMeasure6}</h3>
                                                <h3>{d.strMeasure7}</h3>
                                                <h3>{d.strMeasure8}</h3>
                                                <h3>{d.strMeasure9}</h3>
                                                <h3>{d.strMeasure10}</h3>
                                                <h3>{d.strMeasure11}</h3>
                                                <h3>{d.strMeasure12}</h3>
                                                <h3>{d.strMeasure13}</h3>
                                                <h3>{d.strMeasure14}</h3>
                                                <h3>{d.strMeasure15}</h3>
                                            </div>
                                        )
                                    })
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </ShowContainer>
            </div>
        )
    }
}

export default ShowPage


