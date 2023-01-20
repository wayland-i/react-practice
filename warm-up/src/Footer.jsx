import React from 'react';
import styled from 'styled-components';


const Banner = styled.header`
    background-color: blue;
`

function Footer() {
  return (
    <Banner>
        <div>Footer</div>
    </Banner>
  );
}

export default Footer;