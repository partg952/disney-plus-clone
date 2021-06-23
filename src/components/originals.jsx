import React from 'react'
import styled from 'styled-components'
export default function Originals() {
    const Container = styled.div`
    text-align: left;
    padding: 10px;
    color: white;
    `
    const Wrap = styled.div`
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    div{
        box-shadow: 0px 5px 5px 1px black;
        height: min-content;
        position: relative;
        margin-bottom: 20px;
        border-radius:10px;
        background-color: transparent;
        border: 3px solid ;
        align-items: center;
        justify-content: center;
        border-color: #ffffff6f;
        transition:all 300ms ease-in-out;
        overflow: hidden;
        width: 250px;
        height: 150px;
        &:hover{
            transform: scale(1.1);
            border-color: white;
            border-width: 3px;
        }
        img{
            margin-left: auto;
            margin-right: auto;
            height: 100%;
            width: auto;    
        }
    }
    `
    return (
        <div>
            <Container>
            Originals
            <br />
            <br />
            <Wrap>
                <div>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2015%2F06%2FINSIDE-OUT-18.jpg" alt="" />
                </div>
                <div>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2015%2F06%2FINSIDE-OUT-18.jpg" alt="" />
                </div>
                <div>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2015%2F06%2FINSIDE-OUT-18.jpg" alt="" />
                </div>
                <div>
                    <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fmarkhughes%2Ffiles%2F2015%2F06%2FINSIDE-OUT-18.jpg" alt="" />
                </div>
            </Wrap>
            </Container>
        </div>
    )
}
