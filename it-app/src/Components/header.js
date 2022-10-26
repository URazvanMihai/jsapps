import React from 'react'
import styled from 'styled-components'

function header() {
  return (
    <Container>
        <Meniu>
            <a href = "#">JavaScript</a>
            <a href = "#">React</a>
            <a href = "#">Node</a>
            <a href = "#">Express</a>
        </Meniu>
        
    </Container>
  )
}

export default header


const Container = styled.div`
    
    min-height:fixed;
    display:flex;
    align-item:center;
    padding: 0 20px;
    position:fixed;
    

`

const Meniu = styled.div`
    display:flex;
    align-item:center;
    flex:1;
    padding-top:20px;

    a {
        font-weight:1000;
        text-transform:uppercase;
        padding: 0 20px;
        flex-wrap:nowrap;
        color:black;
        padding-top:20px;
        border-radius: 5px;
        
        
        
        
        
        
        
        
        

    }
    a:hover {
        color:blue;

    }

`






