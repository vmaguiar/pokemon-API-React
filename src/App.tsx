/*
Consume the API and list all pokemons of the resquested endpoint.
https://pokeapi.co/api/v2/pokemon

You must show of each pokemon:
- image
- name
- exp

You can acess the information of a single pokemon at:
https://pokeapi.co/api/v2/pokemon/:id


HINT:
image => sprites.front_default
exp => base_experience

BONUS: If you can order by name.
*/


import axios from 'axios'

import './App.css'

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export function App() {

  const testandoAxios = async () => {
    try {
      const response =  await axios.get(baseURL);
      console.log(response);
    }
    catch(error) {
      console.log(error);
    }
  }

  testandoAxios();

  return (
    <>
      <h1>Import & Testing API with axios</h1>
    </>
  )
}

