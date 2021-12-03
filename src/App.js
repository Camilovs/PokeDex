import React from 'react'
import styled from 'styled-components';
import { ListPokemon } from './ListPokemon';
import { InfoPokemon } from './InfoPokemon';
import { Header } from './Header';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  background-image: url(https://i.imgur.com/NcLZcdn.png);
  background-repeat: no-repeat;
  background-attachment: fixed;
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

