import React from 'react';
import Recipe from '../Recipe.js';
import FilterButtons from './FilterButtons.js';


export default function Favorites(props){
  const selectedRecipes = props.favorites.filter(recipe => {
   return recipe.category === props.selected
    }
  )

  return(
    <div>
        <FilterButtons handleSelect={props.handleSelect}/>
        {
          props.selected
          ?
          props.favorites.filter(recipe => recipe.category === props.selected).map(recipe=>(
            <Recipe
              key={recipe.id}
              url={recipe.url}
              title={recipe.title}
              />
            ))

            :
            props.favorites.map(recipe=>(
              <Recipe
                key={recipe.id}
                url={recipe.url}
                title={recipe.title}
                />
              ))
        }
    </div>
  )
}
