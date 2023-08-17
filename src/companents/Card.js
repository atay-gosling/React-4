import React from 'react';

const Card = ({meal}) => {
    return (
            <div className={'cart'}>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} width={250}/>
            </div>
    );
};

export default Card;