import React from 'react';
import AllRecipes from './AllRecipes';
import Recipe from '../Recipe';
import Favorites from './Favorites';
import RecipeForm from './RecipeForm';
import './LoggedIn.css';

export default function LoggedInView(props) {
  return(


       
    <div className="loggedin-view" >
      <h1 id="loggedin-title"> Foody Recipes </h1>

      {
          props.favoritesView
          ?
          <Favorites
            recipes={props.recipes}
            selected={props.selected}
            favorites={props.favorites}
            renderFavorites={props.renderFavorites}
            handleSelect={props.handleSelect}
            favoritesView={props.favoritesView}
            deleteRecipe={props.deleteRecipe}
          />
          :
          <AllRecipes recipes={props.recipes}
          selected={props.selected} favorites={props.favorites} renderFavorites={props.renderFavorites}
          handleSelect={props.handleSelect}
          favoritesView={props.favoritesView}
          deleteRecipe={props.deleteRecipe}
          />
      }
    
        <RecipeForm
          recipeForm={props.recipeForm}
          handleChange={props.handleChange}
          submitRecipe={props.submitRecipe}
        />
    </div>
  )
};
