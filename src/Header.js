import React from 'react'
import styled from 'styled-components';
import { ReactComponent as YourSvg } from './assets/4.svg';
const HeaderBox = styled.div`
  background-color: #1e2126;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Header = () => {
  return (
    <HeaderBox>
      <YourSvg style={{height:'60px'}}/>
      <h1>PokéDex</h1>
    </HeaderBox>
  )
}
