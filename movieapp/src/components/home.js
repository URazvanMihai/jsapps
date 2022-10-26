import React from 'react'
import styled from"styled-components"

function home() {
  return (
    <Container>
      home
    </Container>
  )
}

export default home

const Container = styled.main`
  min-hight: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  
  &:before {
    background: url("/images/home-background.png")
    center center / cover no-repeat fixed;
    background-size:auto;
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`