import React, { Component } from 'react';
import styled from 'styled-components'
import '../../App.css'

let AboutDescriptionContainer = styled.div  `
    background: rgb(204, 5, 18);
    position:absolute;
    height: 100vh;
    width: 50vw;
    z-index:0
    margin-left:50%
`
let AboutDescription = styled.div`
    padding:20%;
    font-size: 1.5rem;
    color: white
`



class AboutInfo extends Component {
    render() {
        return (
            <AboutDescriptionContainer>
                <AboutDescription className='prettyFonts'>
Arepa Bistrock is a food truck business that focuses on selling tarditional venezuelan food, more specifically Arepas, a type of food made of ground maize dough or cooked flour prominent in the cuisine of Venezuela. It can be served with accompaniments such as cheese, cuajada or avocado, or split to make 'sandwiches'.
                    <br></br>
                </AboutDescription>
            </AboutDescriptionContainer> 
        );
    }
}

export default AboutInfo;