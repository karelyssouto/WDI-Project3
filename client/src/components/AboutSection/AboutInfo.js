import React, { Component } from 'react';
import styled from 'styled-components'


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
                <AboutDescription>
                    Lorem ipsum dolor sit amet, 
                    nam agam indoctum eu. Et mel malis reformidans, qui albucius adipiscing an.
                    Eam at volutpat consectetuer. Ut vide labores sed.Brute volutpat cum in, 
                    sit postulant periculis an, ex dictas omnesque scripserit nam. Vix civibus mentitum an, 
                    ex eleifend scriptorem sit, est an oratio option aliquam.
                    <br></br>
                    Lorem ipsum dolor sit amet, 
                    nam agam indoctum eu. Et mel malis reformidans, qui albucius adipiscing an.
                    Eam at volutpat consectetuer. 
                </AboutDescription>
            </AboutDescriptionContainer> 
        );
    }
}

export default AboutInfo;