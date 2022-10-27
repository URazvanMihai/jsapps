import React from 'react'
import styled from"styled-components"
import ImgSlider from './imgslider'
import Viewers from './Viewers'
import Movies from './Movies'

function home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers/>
      <Movies/> 
    </Container>
  )
}

export default home

const Container = styled.main`
  min-hight: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x:hidden;
  overflow-y:hidden;
  
  
  
  
  &:before {
    background: url("/images/home-background.png")
    center center / cover no-repeat fixed;
    
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`