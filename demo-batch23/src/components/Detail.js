import React, { useEffect,useState } from 'react'
import Header from './Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailMeal=()=>{
    let param=useParams();
    // console.log(param)
    const [meals,setMeals] =useState([]);

    useEffect(()=>{
        getData();
        console.log("Yuhuuu")
    },[]);

    async function getData(){
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.id}`);
            console.log(response.data.meals[0]);
            setMeals(response.data.meals[0])
        } catch (error) {
            console.error(error);
        }
    }
    console.log(meals);
    console.log(meals.idMeal);
    console.log(meals.strMeal);
    console.log(meals.strMealThumb);
    return (
        <div>
            <Header/>
            <h2>
                Detail Meal
            </h2>
                        {
                            meals.idMeal > 0 ? (
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{margin: '16px'}} key={meals.idMeal}>
                                        <h3>{meals.strMeal}</h3>
                                        <img style={{width: '300px', height: '300px'}} src={meals.strMealThumb} alt={meals.strMeal} />
                                        <br/>
                                        <p>{meals.strInstructions}</p>
                                    </div>
                                </div>
                            ):(
                                <center>
                                    <p>Loading ...</p>
                                </center>
                            )
                        }
                
        </div>
    )
}

export default DetailMeal;