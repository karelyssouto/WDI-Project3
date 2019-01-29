import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import '../../App.css'
import Logo from './Logo';
let NavBarContainer = styled.div`
    background: rgb(204, 5, 18);
    display: inline-block; 
    width: 100%;
    height: 10vh;
    vertical-align: middle; 
    line-height: 60px;
    text-align: center; 


`
class NavBar extends Component {
    render() {
        return (
            <div>
            <Logo/>
            <NavBarContainer>
                    <Link to='#about' className='link'> About </Link>
                    <Link to='#services' className='link'>Services</Link>
                    <Link className='link' to='/posts'>Updates</Link>
                    <Link className='link' to='/reviews'>Reviews</Link>
                    <Link to='#contact' className='link'>Contact</Link>
            </NavBarContainer>
            </div>
            );
        }
    }
    
export default NavBar;