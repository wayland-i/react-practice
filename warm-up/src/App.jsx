import './App.css'
import Header from './Header'
import Footer from './Footer'

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

function App() {


  return (
      <Wrapper>
        <Header/>
        <Footer/>
      </Wrapper>
  )
}

export default App
