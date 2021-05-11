import React, {useState} from 'react';
import SignupForm from './SignupForm';
import {NavLink} from "react-router-dom";
import SignInForm from "./SignInForm";
import styled from "styled-components";

const Button = styled.button`
background-color: white;
font-family: Times New Roman;
margin-top: 300px;
transition-duration: 0.4s;
margin-left: 350px;
padding: 0.25rem 1rem;
font-family: inherit;
border: 1px solid rgb(216, 168, 168);
cursor: pointer;
border-radius: 15px; 

  &:hover {
    background: rgb(216, 168, 168);
    color: white;
    border: none;
  }
  &:focus {
    background: #FFB6C1;
    color: white;
    border: none;
  }
`;





function Signup({currentCreative,addCreative,setCreatives, setCurrentCreative}) {

    const [isClicked, setSignupForm] = useState(false)
    const [isClicked2, setSignInForm] = useState(false)

function handleClick () {
setSignupForm(!isClicked)
}

function handleClickSignIn () {
    setSignInForm(!isClicked2)

}


    return (
         <>
        <div className="intro">
           <span><Button className="homepage" onClick={handleClick} >Sign up!</Button></span>
           {isClicked? <SignupForm isClicked={isClicked} setSignupForm={setSignupForm} currentCreative={currentCreative} addCreative={addCreative} setCreatives={setCreatives} /> : null}
           {/* <span> <button onClick={handleClickSignIn} >Sign in!</button></span>
           {isClicked2? <SignInForm setSignInForm={setSignInForm} /> : null} */}
           <span><Button className="homepage" onClick={handleClickSignIn} >Sign In</Button></span>
           {isClicked2? <SignInForm setCurrentCreative={setCurrentCreative} isClicked={isClicked} setSignInForm={setSignInForm}  /> : null}
        </div>
       </>
    )
        
}
 
export default Signup;