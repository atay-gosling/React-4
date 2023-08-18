import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const IngredientMeals = () => {
    const { ingredientId } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientId}`)
            .then(response => setMeals(response.data.meals))
    }, [ingredientId]);

    return (
        <div>
                <button onClick={() => { navigate(-1) }}>Back</button>
            <h2>Meals with {ingredientId}</h2>
            <div>
                {meals.map(meal => (
                    <Link key={meal.idMeal} to={`/meal/${meal.idMeal}`}>
                        <img src={meal.strMealThumb} width={250} />
                        <p>{meal.strMeal}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default IngredientMeals;
