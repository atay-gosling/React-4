import React, { useEffect, useState } from 'react';
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";
import '../index.css'

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
            <button onClick={() => { navigate('/') }}>BACK</button>
            <div className={'aboutmeal'}>
                <h1>{meal.strMeal}</h1>
                <span className={'span'}><h3>{meal.strCategory}</h3></span>
            </div>
            <iframe className={'youtube'} width={'420'} height={'315'} src={`https://www.youtube.com/embed/${youtube}`}>
            </iframe>
            <div className={`${'row'} ${'HelpRow'}`}>
                <div className={'box'}>
                    <div className="box"> <img src={meal.strMealThumb} alt={meal.strMeal} width={250}/></div>
                </div>
               <div className="col-6">
                   <div className="box"><p>{meal.strInstructions}</p></div>
               </div>
            </div>
            <div className={'ingri'}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className={`${'box'} ${'helpbox'}`}>
                        <Link to={`/ingredient/${meal.strIngredient1}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient2}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient3}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient7}.png`} width={'150'} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className={`${'box'} ${'helpbox'}`}>
                        <Link to={`/ingredient/${meal.strIngredient4}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient5}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient6}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient8}.png`} width={'150'} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className={`${'box'} ${'helpbox'}`}>
                        <Link to={`/ingredient/${meal.strIngredient7}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient8}`}>
                                <img src={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}.png`} width={'150'} alt=""/>
                            </Link>
                            <Link to={`/ingredient/${meal.strIngredient9}`}>
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
