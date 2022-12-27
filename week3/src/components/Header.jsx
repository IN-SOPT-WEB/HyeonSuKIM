import React from 'react';
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Head>당신 누구얒!</Head>
    </div>
  );
};

const Head = styled.h2`
  text-align: center;
  background-color: #474541;
  color: white;
  padding: 20px 0px 10px;
  margin: 0;
`

export default Header;
