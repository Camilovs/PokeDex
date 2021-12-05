import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { average, prominent } from 'color.js'

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]});
  height: 200px;
  width: 300px;
`;

export const PokemonCard = ({pokemon}) => {
  const [color, setColor] = useState([0,0,0])
  console.log(pokemon.picture)
  const getColor = async(url) => {
    prominent(url).then(color => {
      setColor(color)
      return color;
    }).catch(err => console.log(err))
  }
  // getColor(pokemon.picture)
  console.log(color)
  useEffect(() => {
    console.log('rendering')
    getColor(pokemon.picture)
  }, [])
  return (
      <CardPokemon color={color[1]}>
        <h4>#{pokemon.id}: {pokemon.name}</h4>
        <img src={pokemon.picture} style={{width:'150px', height:'150px'}}></img>
      </CardPokemon>
  )
}
