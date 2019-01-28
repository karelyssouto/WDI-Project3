import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../../App.css'

let NavBarContainer = styled.div`
    background: #B4101B;
    width: 100vw;
    height: 10vh;
    text-align: right;
    padding: 
`



class NavBar extends Component {
    render() {
        return (
            <NavBarContainer>
                    <a href='#about' className='link'> About </a>
                    <Link className='link' to='/posts'>Updates</Link>
                    <Link className='link' to='/reviews'>Reviews</Link>
                    <a href='#contact' className='link'>Contact</a>
            </NavBarContainer>
        );
    }
}

export default NavBar;