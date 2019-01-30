import React, { Component } from 'react';
import truck from '../../images/truck.jpg'
import styled from 'styled-components'
import '../../App.css'

let TrcukImage = styled.img`
    height: 100vh;
    width: 50vw;
    z-index: 0;
    position: absolute;
`
let ImageOverlay = styled.div`
    height: 100vh;
    width: 50vw;
    background: rgba(255, 174, 82, 0.51);
    position: absolute;
    z-index:1;
    text-align: right;
    color: white;
    font-size: 20em;

`


class AboutImage extends Component {
    render() {
        return (
            <div>
            <ImageOverlay >
                    <a name='about' href='/' className='link'>ABO<br></br>UT</a>
            </ImageOverlay>
            <TrcukImage src={truck} alt='truck' />
            </div>
        );
    }
}

export default AboutImage;