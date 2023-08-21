import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutPage from "./pages/AboutPage";
import MealInfo from "./pages/MealInfo";
import IngredientMeals from "./companents/Ingredients";

const App = () => {
    return (
        <div>
                <Routes>
                    <Route path={'/'} element={<Homepage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/meal/:id'} element={<MealInfo />} />
                    <Route path="/ingredient/:ingredientId" element={<IngredientMeals />} />
                </Routes>
        </div>
    )
}

export default App
