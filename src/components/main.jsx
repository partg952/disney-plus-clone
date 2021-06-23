import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeIcon from '../assets/drive-download-20210620T180523Z-001/home-icon.svg'
import OriginalIcon from '../assets/drive-download-20210620T180523Z-001/original-icon.svg'
import BackgroundImage from '../assets/home.png'
import SeriesIcon from '../assets/series-icon.svg'
import SearchIcon from '../assets/drive-download-20210620T180523Z-001/search-icon.svg'
import MoviesIcon from '../assets/drive-download-20210620T180523Z-001/movie-icon.svg'
import WatchListIcon from '../assets/drive-download-20210620T180523Z-001/watchlist-icon.svg'
import Image1  from '../assets/slider-badag.jpg'
import Image2 from '../assets/slider-badging.jpg'
import Image3 from '../assets/slider-scales.jpg'
import Image4 from '../assets/slider-scale.jpg'
import { Carousel } from 'react-responsive-carousel';
import MarvelImage from '../assets/viewers-marvel.png'
import PixarImage from '../assets/viewers-pixar.png'
import StarsWarsImage from '../assets/viewers-starwars.png'
import NationalImage from '../assets/viewers-national.png'
import DisneyImage from '../assets/viewers-disney.png'
import DisneyVideo from '../assets/disney-video.mp4'
import MarvelVideo from '../assets/marvel-video.mp4'
import NationalVideo from '../assets/geographic-video.mp4'
import StarWarsVideo from '../assets/stars-wars-video.mp4'
import PixarVideo from '../assets/pixar-video.mp4'
export default function Main() {
    const Background = styled.div`
    background-size: 100% 110%;
    background-image: url(${BackgroundImage});
    position: absolute;
    display: block;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: -9999999;
    height: 100%;
    `
    const Nav = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap:wrap;
    
    button {
        letter-spacing: 1px;
        font-family: 'Roboto', sans-serif;
        align-items:center ;
        margin: 10px;
        padding: 10px;
        font-weight: 600;
        *{
            margin: 3px;
        }
        display: flex;
        color: white;
        background-color: transparent;
        border: 0;
        img{

        height: 30px;
        }
    }
    `
    const Viewers = styled.div`
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    div{
        box-shadow: 0px 5px 5px 1px black;
        height: min-content;
        position: relative;
        margin-bottom: 20px;
        border-radius:10px;
        background-color: transparent;
        border: 2px solid ;
        align-items: center;
        justify-content: center;
        border-color: #ffffff6f;
        transition:all 300ms ease-in-out;
        overflow: hidden;
        &:hover{
            transform: scale(1.09);
            border-color: white;
            video{
                visibility: visible;
            }
        }
        video{
            object-fit: cover;
            visibility: hidden;
            top: 0;
            left: 0;
            height: 100%;
            width:100% ;
            position :absolute ;
            z-index:-1;

        }
        img{
            margin: 5px;
            height:120px;
            z-index:2;
        }
    }
    `
    return (
        <div style={{backgroundImage:`url(${BackgroundImage})`}}>
            <Nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20210207182738%21Disney%2B_logo.svg" alt="" />
                <button>
                    <img src={HomeIcon} alt="" />
                    <p>HOME</p>
                </button>
                <button>
                    <img src={OriginalIcon} alt="" />
                    <p>ORIGINALS</p>
                </button>
                <button>
                    <img src={SeriesIcon} alt="" />
                    <p>SERIES</p>
                </button>
                <button>
                    <img src={SearchIcon} alt="" />
                    <p>SEARCH</p>
                </button>
                <button>
                    <img src={MoviesIcon} alt="" />
                    <p>MOVIES</p>
                </button>
                <button>
                    <img src={WatchListIcon} alt="" />
                    <p>WATCHLIST</p>
                </button>
            </Nav>
            <Carousel autoPlay='true' infiniteLoop='true' interval='3000' useKeyboardArrows='true' className='Carousel' >
        <div>
        <img src={Image1} alt="" />
        </div>
        <div>
        <img src={Image2} alt="" />
        </div>
        <div>
        <img src={Image3} alt="" />
        </div>
        <div>
        <img src={Image4} alt="" />
        </div>
            </Carousel>
        <Viewers>
            <div>
                <video src={MarvelVideo} loop={true} autoPlay={true} muted  >
                </video>
                <br />
                <img src={MarvelImage} alt="" />
            </div>
            <div>
            <video src={PixarVideo}  autoPlay={true} loop={true} muted >
              
                </video>
                <br />
                <img src={PixarImage} alt="" />
            </div>
            <div>
            <video src={StarWarsVideo}  autoPlay={true} loop={true} muted>
                </video>
                <br />
                <img src={StarsWarsImage} alt="" />
            </div>
            <div>
            <video  src={NationalVideo} autoPlay={true} loop={true} muted >
                
                </video>
                <br />
                <img src={NationalImage} alt="" />
            </div>
            <div>
            <video src={DisneyVideo} muted  autoPlay={true} loop={true} >
               
            </video>
                <br />
                <img src={DisneyImage} alt="" />
            </div>
        </Viewers>
{/* <Background/> */}
        </div>
    )
}
