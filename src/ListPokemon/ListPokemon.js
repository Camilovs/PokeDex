import React from 'react'
import { Fragment } from 'react';
import styled from 'styled-components';
import { usePokemonPaginated } from '../hooks/usePokemonPagina';
import { PokemonCard } from './PokemonCard';
const Content = styled.div`
  width: 70%;
  background-color: rgba(224, 255, 255,0.7) ;
`;

const InputSearch = styled.input`

  border-radius: 15px;
  background-color: rgba(255,255,255, 0.5);
  padding: 10px;
  border-color:transparent;
  margin: 10px;
  outline: none;
  font-size: medium;
  width: 30%;
  font-family: 'Helvetica', FontAwesome;
  :focus{
  background-color: rgba(255,255,255, 0.7);

  }
`;

const GridPokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 93%;
  overflow-y: auto;
`;
const pokemon = {
  id: '1', 
  picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', 
  name: 'bulbasaur'
}
export const ListPokemon = () => {
  const {simplePokemonList, isLoading} = usePokemonPaginated()
  console.log(simplePokemonList)
  return (
    <Content>
      <InputSearch placeholder='&#xF002;  Buscar pokemon'/>
      <GridPokemons>
      {isLoading ? (
        <p>Cargando..</p>
      ) : (
        <Fragment>
          {simplePokemonList.map((pokemon)=>{
            return (
              <PokemonCard pokemon={pokemon}/>
            )
          })}
        </Fragment>
      )}
      </GridPokemons>
    </Content>
  )
}
