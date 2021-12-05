import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePokemon = ( id ) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState({})

    const loadPokemon = async() => {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon( resp.data );
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}
