import React from 'react'
import styled from'styled-components'


function Movies() {
  return (
    <Container>
        <h4>Recommeded for You</h4>
        <Content>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>
            <Wrap>
                <img src="https://imgs.search.brave.com/ItkK92vxHg2SChClfpxrWFUqGaCETCq0S4R3YBdXoXw/rs:fit:791:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5mSXBNY2JY/bHp2UWtjZTBMUnpk/MlhBSGFFYyZwaWQ9/QXBp" />
            </Wrap>

        </Content>
    </Container>
  )
}

export default Movies



const Container = styled.div`




`


const Content = styled.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));


`

const Wrap = styled.div`
    cursor:pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,149,149, 0.1);
    box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
    rgb( 0 0 0/ 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover {
        transform:scale(1.05);
        border-color:rgba(249,249,249, 0.8);
    }
`