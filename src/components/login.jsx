import React from 'react'
import firebase from 'firebase'
import firebaseConfig from '../firebase'
import styled from 'styled-components'
import BackgroundImage from '../assets/login-background.jpg'
import CTAicon from '../assets/cta-logo-one.svg'
import CTA2 from '../assets/cta-logo-two.png'
import { useHistory } from 'react-router'
export default function Login() {
    const history = useHistory();

    const GoogleAuthProvider = new  firebase.auth.GoogleAuthProvider();

    function signinuser(popup){
        firebase.auth().signInWithPopup(popup)
        .then((user)=>{
            alert('user signed in')
            console.log(user.user)
            history.push('/home')
        }).catch((err)=>{
            console.log(err)
            alert('We Faced Some Error Please Try Again Later')
        })
    }

    const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    background-color: black;
    img{
        height: 50px;
        
    }
    button{
        font-family: 'Roboto', sans-serif;
        width: 100px;
        color: white;
        letter-spacing: 1px;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        background-color: transparent;
        transition: all 300ms ease;
        &:hover{
            background-color:white ;
            color: black;
        }
    }
    `
    const MainDiv = styled.div`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    img{
        height: 200px;
        width: 50%;
        min-width: 20%;
        @media only screen and (max-width: 970px){
            width: 90%;
            height: 150px;
        }
    }
    #background-image{
        background-attachment: fixed;
        position: absolute;
        height: auto;
        width: auto;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
    button{
        font-family: 'Roboto', sans-serif;
        width: 50%;
        padding: 15px;
        font-size: 16px;    
        letter-spacing: 2px;
        background-color: blue;
        border: 0;
        border-radius: 5px;
        color: white;
        font-weight: 900;
    }
    p{
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        text-align: center;
        font-weight: 400;
        letter-spacing: 1px;
    }
    #cta-logo2{
        height: 50px;
        
        @media only screen and (max-width: 970px){
            width: 95%;
            height: 30px;
        }
    }
    `

    const ImageDiv = styled.div`
    position: absolute;
    z-index: -100000000000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url(${BackgroundImage});
    `
    return (
        <>
        <Nav>
        <img src='https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20210207182738%21Disney%2B_logo.svg' alt="" />
        <button onClick={()=>signinuser(GoogleAuthProvider)}>LOGIN</button>
        </Nav>
        <ImageDiv/>
        <MainDiv>
            
            <img src={CTAicon} alt="" />
            <br />
            <button onClick={()=>signinuser(GoogleAuthProvider)}>GET ALL THERE</button>
            <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
            As of 3/26/21 ,the price of Disney+ and The Disney Bundle will increase by 51</p>
            <img src={CTA2} alt="" id='cta-logo2'/>
        </MainDiv>
        </>
    )
}
