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
        <div className='pokemon-card'>
            <img className='pokemon-img'
                src={pokemonDetails.img}
                alt="pokemon image"
            />

            <div className='pokemon-info'>
                <span className="pokemon-name">
                    <b>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</b>
                </span>
                <span>Exp: {pokemonDetails.exp}</span>
            </div>
        </div>
    );
};