import React, { useEffect,useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

const DisplayApi=()=>{
    const[meals,setMeals]=useState(null);
    const[selectedCat,setSelectedCat]=useState('Seafood');

    const selectHandle=(id)=>{
    }

    const fetchData=async ()=>{
        const data = await fetch ('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        // const data = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <Header/>
            {/* <h1>useEffect</h1>
            <button onClick={() => selectHandle('Beef')}>Beef</button>
            <button onClick={() => selectHandle('Seafood')}>Seafood</button> */}

            {
                meals && meals.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            meals.map(meal => (
                                <div style={{margin: '16px'}} key={meal.idMeal}>
                                    <p>{meal.strMeal}</p>
                                    <img style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                                    <br/>
                                    <Link to={"/detail/"+meal.idMeal}>
                                        <button onClick={() => selectHandle(meal.idMeal)}>Detail</button>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>Loading ...</p>
                )
            }
        </div>
    )
}

export default DisplayApi;