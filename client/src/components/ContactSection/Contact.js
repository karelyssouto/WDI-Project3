import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css'
import { Link } from 'react-router-dom'


let Container = styled.div `
    width: 100vw;
    height: 50%;
    background:rgb(204, 5, 18);
    position:absolute
`
let ContactHeader = styled.h1`
    color: white;
    font-size: 3em;
    margin: 0 auto;
    padding: 3% 0 0% 5%;
    display: block

`
let ContactInfo = styled.div `
    color: white;
    padding-left: 15%;

`


class Contact extends Component {
    render() {
        return (
            <Container>
                <a name='contact' href='/reviews'></a>
                <ContactHeader className='prettyTitleFonts'>Contact</ContactHeader>
                <ContactInfo>
                <h1 className='prettyFonts'>Victor Santana</h1>
                <h3 className='prettyFonts'>Email:</h3><p>arepabistrock@mail.com</p>
                <h3 className='prettyFonts'>Phone</h3><p>+1 (404)-384-8210</p>
                </ContactInfo>

                <Link to='/' className='link'>Home</Link>
            </Container>
        );
    }
}

export default Contact;