import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../../images/image.png'

let LogoContainer = styled.div`
    height: 90vh;
    width:100vw;
    background: black;
    display:flex;
    justify-content: center;
    align-items: center
`
let LogoImage = styled.img`
    height: 40vh;
    width: 90vh;
`
class Logo extends Component {
    render() {
        return (
            <LogoContainer>
                <LogoImage src={logo} alt='logo'/>
            </LogoContainer>
        );
    }
}

export default Logo;