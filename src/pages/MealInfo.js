import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";

const MealInfo = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(r => setMeal(r.data.meals[0]))

    }, [id])

    const youtube = meal.strYoutube?.split('=')[1]
    return (
        <div className={'container'}>
            <button onClick={() => { navigate('/') }}>Back</button>
            <div className={'aboutmeal'}>
                <h1>{meal.strMeal}</h1>
                <h3>{meal.strCategory}</h3>
            </div>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={250}/>
            <p>{meal.strInstructions}</p>
            <iframe width={'420'} height={'315'} src={`https://www.youtube.com/embed/${youtube}`}>
            </iframe>

            <div className={'ingri'}>
                <div className={'row'}>
                    <div className="{col-4 boxhelp}">
                        <div className="{box}">
                            <Link to={`/ingredient/${meal.strIngredient1}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient2}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient3}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`} width={'150'} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="{col-4 boxhelp}">
                        <div className="{box}">
                            <Link to={`/ingredient/${meal.strIngredient4}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient5}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient6}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`} width={'150'} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="{col-4}">
                        <div className="{box}">
                            <Link to={`/ingredient/${meal.strIngredient7}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient7}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient8}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient8}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient9 }`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient9}.png`} width={'150'} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealInfo;
