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


import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';



const baseURL = 'https://pokeapi.co/api/v2/pokemon';

interface IpokemonObj {
  name: string,
  url: string
};


export function App() {
  const [pokemonList, setPokemonList] = useState<Array<IpokemonObj>>([]);


  useEffect(() => {
    //Create the API request as scoped async function in the hook
    async function loadApiData() {
      try {
        const response =  await axios.get(baseURL);
        setPokemonList(response.data.results);
      }
      catch(error) {
        console.log(error);
      } 
    }

    loadApiData();
  }, []);

  return (
    <>
      {
        pokemonList.map((itemObj, index) => (
          <div className='pokemon-container' key={index}>
            <div className='pokemon-info'>
              <p>{index} {itemObj.name}</p>
              {/* <p>TEM Q PEGAR A XP</p> */}
            </div>
            <img className='pokemon-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Pokemon image" />
          </div>
        ))
      }
    </>
  );
}

