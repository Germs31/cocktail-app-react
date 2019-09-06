import React from 'react'

class ShowPage extends React.Component{
    state ={
        drinkI: [],
        drinkG: [],
        drinkC: []
    }
    
    componentDidMount(){
        this.getDrinkIngredient()
        this.getDrinkGlasses()
        this.getDrinkCatagories()
    }

    getDrinkIngredient = async () =>{
        try{
            const data = await fetch(`http://localhost:3000/cocktail/allIngredients`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const drinkData = await data.json()
            console.log(drinkData, 'parsed drink')

            this.setState({
                drinkI: drinkData.ingredients
            })

        }catch(err){
            console.log(err)
        }
    }

    getDrinkGlasses = async () =>{
        try{
            const data = await fetch(`http://localhost:3000/cocktail/allGlasses`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const drinkData = await data.json()
            console.log(drinkData, 'parsed drink')

            this.setState({
                drinkG: drinkData.glasses
            })

        }catch(err){
            console.log(err)
        }
    }

    getDrinkCatagories = async () =>{
        try{
            const data = await fetch(`http://localhost:3000/cocktail/allCatagories`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const drinkData = await data.json()
            console.log(drinkData, 'parsed drink')

            this.setState({
                drinkC: drinkData.catagories
            })

        }catch(err){
            console.log(err)
        }
    }


    render(){
        console.log(this.state.drinkC)
        return(
            <form>
                <select>
                    {
                        this.state.drinkI.map((d,i)=>{
                            return(<option key={i} value={d.strIngredient1}>{d.strIngredient1}</option>)
                        })
                    }
                </select>
                <select>
                    {
                        this.state.drinkG.map((d,i)=>{
                            return(<option key={i} value={d.strGlass}>{d.strGlass}</option>)
                        })
                    }
                </select>
                <select>
                    {
                        this.state.drinkC.map((d,i)=>{
                            return(<option key={i} value={d.strCategory}>{d.strCategory}</option>)
                        })
                    }
                </select>
            </form>
        )
    }
}

export default ShowPage


