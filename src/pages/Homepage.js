import React, {useEffect, useState} from 'react'
import Header from '../companents/header'
import axios from "axios";
import '../index.css'
import Productlist from "../companents/productlist";

const Homepage = () => {
    const [meals, setMeals] = useState([])

    useEffect(() =>{
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(r => setMeals(r.data.meals))
    },[])
    return (
        <div className={'container'}>
                <Header/>
                <Productlist meals={meals}/>
        </div>
    )
}

export default Homepage;