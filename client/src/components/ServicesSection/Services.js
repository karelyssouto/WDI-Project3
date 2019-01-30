import React, { Component } from 'react';
import styled from 'styled-components'
import ServicesList from './ServicesList';
import phone from '../../images/phone.png'

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
    margin-top: 20%;
    display:flex;
    justify-content:space-around

`
let Phone = styled.img `
    padding: 2%
`
let PhoneNumber = styled.h2 `
    font-size: 2em;
`

class Services extends Component {
    render() {
        return (
            <ServicesContainer>
                <h1>Services</h1>
                <ServicesList/>
                <PhoneNumberContainer>
                    <Phone src={phone} alt='phone icon' />
                    <PhoneNumber> (770)-374-1918</PhoneNumber>
                </PhoneNumberContainer>
            </ServicesContainer>
        );
    }
}

export default Services;