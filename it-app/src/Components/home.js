import React from 'react'
import styled from 'styled-components'
import Section from './section.js'

function home() {
  return (
    <Container>
        <Section
          title = "JavaScript"
          backgroundImg = "java1.webp"
        />
        <Section
          title = "React"
          backgroundImg = "java2.webp"
        />
        <Section
          title = "Node"
          backgroundImg = "java3.webp"
        />
        
        <Section
          title = "Express"
          backgroundImg = "java4.webp"
        />
    </Container>
  )
}

export default home


const Container =  styled.div`
background-size: auto;

  
    
`


