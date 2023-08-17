import React from 'react';
import Card from "./Card";
import {Link} from "react-router-dom";

const Productlist = ({meals}) => {
    return (
        <div className={'row'}>
            {
                meals.map(meal => {
                    return (
                        <div className={'col-4'} key={meal.idMeal}>
                            <Link to={`/meal/${meal.idMeal}`}>
                                <Card meal={meal} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Productlist;