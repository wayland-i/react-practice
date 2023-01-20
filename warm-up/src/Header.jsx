import React from 'react';
import styled from 'styled-components';

const Banner = styled.header`
    margin-top: 2%;
`

function Header() {
  return (
    <Banner>
        <div>Header</div>
    </Banner>
  );
}

export default Header;