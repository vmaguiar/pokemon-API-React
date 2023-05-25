import { useEffect, useState } from "react";
import axios from "axios";

import { IpokemonObj } from "./App";


export function Pokemon(props: { props:IpokemonObj }) {
    const [pokemonDetails, setPokemonDetails] = useState({
        name: '',
        exp: '',
        img: ''
    });

    useEffect(() => {
        async function loadDetails() {
            try {
                const response =  await axios.get(props.props.url);
                setPokemonDetails({
                name: response.data.name,
                exp: response.data.base_experience,
                img: response.data.sprites.front_default
                });
            }
            catch(error) {
                console.log(error);
            } 
          }
          loadDetails();
    }, []);

    if(pokemonDetails === null) {
        return <div> - </div>
    }

    return (
        <div className="pokemonSelf-container">
        {/* <span>{index + 1}</span> */}

              <div className='pokemon-card'>
                <img className='pokemon-img'
                  src={pokemonDetails.img}
                  alt="pokemon image"
                />

                <div className='pokemon-info'>
                  <span>{pokemonDetails.name}</span>
                  <span>Exp: {pokemonDetails.exp}</span>
                </div>

              </div>

            </div>
    );
};