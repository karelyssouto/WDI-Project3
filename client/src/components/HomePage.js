import React, { Component } from 'react';
import NavBar from './LandingSection/NavBar';
import Logo from './LandingSection/Logo';
import About from './AboutSection/About';
import Services from './ServicesSection/Services';


class HomePage extends Component {
    render() {
        return (
            <div>
                <Logo />
                <NavBar />
                <About />
                <Services />
            </div>
        );
    }
}

export default HomePage;