import React from 'react'
import styled from 'styled-components'
import {useEffect,useState} from 'react'
import axios from  'axios'
import { div } from 'prelude-ls'
export default function Recommends({url}) {
    const [movies,addMovies] = useState([])
    console.log(movies)
    useEffect(()=>{
            async function GetMovies(){
                const data = await axios(`https://api.themoviedb.org/3${url}`)
                console.log(data.data)
                addMovies(data.data.results)
            }
            GetMovies();
        
    },[])

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
    &::-webkit-scrollbar{
            height: 10px;
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ffffff76;
            border-radius: 50px;
            &:hover{
                background-color:white;
            }
        }
    div{
        
        box-shadow: 0px 5px 5px 1px black;
        display: inline-block;
        border-radius:10px;
        background-color: transparent;
        border: 3px solid ;
        margin: 20px;
        align-items: center;
        justify-content: center;
        border-color: #ffffff6f;
        transition:all 300ms ease-in-out;
        overflow: hidden;
        min-width: 200px;
        max-width: 200px;
        height: 250px;
        &:hover{
            transform: scale(1.1);
            border-color: white;
            border-width: 3px;
            opacity: 1;
        }
        img{
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 100%;
            /* object-fit:cover ; */
        }
    }
    `
    return (
        <div>
            <Container>
            <h1>Recommended For You</h1>
            <br />
            <br />
            <Wrap id='wrap-container'> 
               {
                   
                movies.map((items)=>{
                   return(
                       <div>
                           <img src={`https://image.tmdb.org/t/p/w500${items.poster_path}`} alt="" />
                       </div>
                   ) 
                })
                }
            </Wrap>
            </Container>
        </div>
    )
}
