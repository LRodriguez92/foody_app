import React from 'react';
import Recipe from '../Recipe.js';
import Favorites from './Favorites.js';


export default function AllRecipes(props){
  console.log(props.recipes);
  return(

<<<<<<< HEAD
    <div >

=======
    <div>
<<<<<<< HEAD

=======
      <FilterButtons handleSelect={props.handleSelect} renderFavorites={props.renderFavorites} favoritesView={props.favoritesView}/>
>>>>>>> f5ab749a57649baecea457dbe7c174bc6b7df107
>>>>>>> 06c62154001dc329871c58bc48fe46a5a3367a42
          {
            props.selected
            ?
            props.recipes.filter(recipe => recipe.category === props.selected).map(recipe =>(
              <Recipe
                key={recipe.id}
                url={recipe.url}
                title={recipe.title}
                vidId={recipe.videoid}
                />
              ))

              :
              props.recipes.map(recipe=>(
                <Recipe
                  key={recipe.id}
                  url={recipe.url}
                  title={recipe.title}
                  vidId={recipe.videoid}
                  />
                ))
          }

    </div>
  )
}
