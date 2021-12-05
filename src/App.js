import React from 'react'
import styled from 'styled-components';
import { InfoPokemon } from './InfoPokemon';
import { Header } from './Header';
import { ListPokemon } from './ListPokemon/ListPokemon';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  background-image: url(https://i.imgur.com/NcLZcdn.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
`;

export const App = () => {
  return (
    <Body>
      <Header/>
      <Content>
        <ListPokemon/>
        <InfoPokemon/>
      </Content>
    </Body>
  )
}

