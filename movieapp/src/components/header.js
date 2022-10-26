import React from 'react'
import styled from'styled-components'


function header() {
  return (
    <Nav>
        <Logo src = "" />
        <NavMenu>




        </NavMenu>
    </Nav>
  )
}

export default header

const Nav = styled.nav`
    height:70px;
    background-color: #090b13;



`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`

`