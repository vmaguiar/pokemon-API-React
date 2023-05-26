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

// maybe create a pokemon component?


import axios from 'axios'
import { useEffect, useState } from 'react';

import { Pokemon } from './Pokemon';

import './App.css'



const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export interface IpokemonObj {
  name: string,
  url: string
};


export function App() {
  const [pokemonUrlList, setPokemonUrlList] = useState<Array<IpokemonObj>>([]);


  useEffect(() => {
    //Create the API request as scoped async function in the hook
    async function loadApiData() {
      try {
        const response =  await axios.get(baseURL);
        setPokemonUrlList(response.data.results);
      }
      catch(error) {
        console.log(error);
      } 
    }

    loadApiData();
  }, []);

  return (
    <>
      <h3>Solution by: vmAguiar</h3>
      <h1>Pokemon API consumer - React Challenge</h1>
      <hr />

      <div className='pokemonsList-container'>
          {
            pokemonUrlList.map((itemObj, index) => (
              <div className="pokemonSelf-container" key={itemObj.name}>
                <span>{index + 1}</span>
                < Pokemon props = {itemObj}/>
              </div>
            ))
          }
      </div>

    </>
  );
}

