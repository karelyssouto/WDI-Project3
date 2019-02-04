import React, { Component } from 'react';
import styled from 'styled-components'
import ServicesList from './ServicesList';
import phone from '../../images/phone.png'
import arepas from '../../images/servicesimage.jpg'

let ServicesContainer = styled.div `
    background: black;
    width: 100vw;
    height: 100vh;
    color:white
    h1{
        padding:5% 0 0 5%;
        font-size: 6em
    }
`
let PhoneNumberContainer = styled.div`
    height: 15vh;
    width: 35vw;
    background: orange;
    margin-top: 10%;
    display:flex;
    justify-content:space-around

`
let Phone = styled.img `
    padding: 2%
`
let PhoneNumber = styled.h2 `
    font-size: 2em;
`
let Image = styled.img `
    width: 45vw;
    height: 45vh;
    padding: 40px;
`
let ServiceContainer = styled.div `
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background: black;


`
class Services extends Component {
    render() {
        return (
            <ServiceContainer>
                <a name='services' href='/' ></a>
            <ServicesContainer>
                    <h1 className='prettyTitleFonts'>Services</h1>
                <ServicesList/>
                <PhoneNumberContainer>
                    <Phone src={phone} alt='phone icon' />
                    <PhoneNumber> (770)-374-1918</PhoneNumber>
                </PhoneNumberContainer>
                
            </ServicesContainer>
            <Image src={arepas} alt='arepa' />
            </ServiceContainer>
        );
    }
}

export default Services;