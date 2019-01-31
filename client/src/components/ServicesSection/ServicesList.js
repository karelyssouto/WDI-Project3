import React, { Component } from 'react';
import styled from 'styled-components'


let ServicesListContainer = styled.ul`
    list-style:none;

`

let ServiceName = styled.h2`
    color:white;
    font-size: 2em;
    text-transform: uppercase;

`
let ServiceListDescription =styled.li `
    color:white;
    font-size: 1em;

`

class ServicesList extends Component {
    render() {
        return (
            <ServicesListContainer>
                <ServiceName>Food Truck Events</ServiceName>
                <ServiceListDescription>nam agam indoctum eu. Et mel malis reformidans, qui albucius adipiscing an.</ServiceListDescription>
                <ServiceName>Special Events Catering</ServiceName>
                <ServiceListDescription>nam agam indoctum eu. Et mel malis reformidans, qui albucius adipiscing an.</ServiceListDescription>
            </ServicesListContainer>
        );
    }
}

export default ServicesList;