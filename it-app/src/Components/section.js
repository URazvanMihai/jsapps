import React from 'react'
import styled from 'styled-components'

function section({backgroundImg,}) {
  return (
    <Wrap bgImage={backgroundImg}>
      
    </Wrap>
  )
}

export default section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid black;
    
    
    background-image:${props=>`url("/JSPHOTO/${props.bgImage}")`}
    
`


  

