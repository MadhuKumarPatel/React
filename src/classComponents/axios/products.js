import axios from "axios";
import "./products.css"
const { Component } = require("react");

class Productlisting extends Component{
 
     state={
        recipes:[]
     }
     componentDidMount(){
        this.fetchData()
     }

  fetchData=async() =>{
    let result=await axios("https://dummyjson.com/recipes")
    console.log(result.data.recipes);
    
    this.setState({
        recipes:result.data.recipes
    })
  }

  deleteRecipe=(i)=>{
     let newRecipes=this.state.recipes.filter((eachitem,index)=>{
         return index!=i
     })
     this.setState({
      recipes:newRecipes
     })
  }

  render(){
    return(
        <>
         <div className="container">
        {
            this.state.recipes.length>0
            ?
            this.state.recipes.map((eachobj,i)=>{
                let {image, name, cuisine,servings, rating}=eachobj
                return(
                    <div className="recipecard">
                         <h3>{cuisine}</h3>
                         <h4 onClick={()=>this.deleteRecipe(i)}>&#x3A7;</h4>
                         <img src={image} alt={name}/>
                         <h2>{name}</h2>
                         <p>Serves {servings} people</p>
                         <p><span>Rating : </span>  {rating} / 5</p>
                    </div> 
                )
            })
            :
            <h1>no items</h1>     
        }
        </div>
        </>
    );
  }
  }
export default Productlisting;