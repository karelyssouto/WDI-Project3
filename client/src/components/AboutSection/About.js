import React, { Component } from 'react';
import AboutImage from './AboutImage';
import AboutInfo from './AboutInfo';
import styled from 'styled-components'


let AboutSection = styled.div`
    display: flex
    width: 100vw;
    height: 90vh

`


class About extends Component {
    render() {
        return (
             <AboutSection>
                <AboutImage />
                <AboutInfo />
            </AboutSection>
        );
    }
}

export default About;