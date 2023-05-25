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

// maybe create a pokemon componente?


import axios from 'axios'
import { useEffect, useState } from 'react';

import './App.css'



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
      <h3>Solution by: vmAguiar</h3>
      <h1>Pokemon API consumer - React Challenge</h1>
      <hr />

      <div className='pokemonsList-container'>
        {
          pokemonList.map((itemObj, index) => (
            <div className="pokemonSelf-container" key={index}>
              <span>{index + 1}</span>

              <div className='pokemon-card'>
                <img className='pokemon-img'
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
                  alt="pokemon image"
                />

                <div className='pokemon-info'>
                  <span>{itemObj.name}</span>
                  <span> - Exp: 1000xp</span>
                </div>

              </div>

            </div>
          
          ))
        }
      </div>

    </>
  );
}

