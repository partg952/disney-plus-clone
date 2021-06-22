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


export default function Main() {
    const Background = styled.div`
    background-image: url(${BackgroundImage});
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -9999999;
    `
    const Nav = styled.nav`
    display: flex;
    align-items: center;
    
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
    return (
        <div>
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
            <Background/>
            <Carousel autoPlay='true' infiniteLoop='true' interval='3000' useKeyboardArrows='true' className='Carousel' showIndicators='false' >
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
        </div>
    )
}
