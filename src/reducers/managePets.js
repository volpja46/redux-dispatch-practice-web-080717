export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
       return {...state, pets: [...state.pets, action.pet]}
     case 'REMOVE_PET':
     debugger;
       return {...state, pets: state.pets.filter(pet => pet.id != action.id)}
     default:
       return state
    }
  }

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export const render = () => {
  let container = document.getElementById('container');
  let allPets = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  });
  container.innerHTML = `<ul>${allPets}</ul>`;
}



//inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById.
