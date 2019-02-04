import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
let Inputs = styled.input`
    border: none;
    background: white ;
    width: 35vw;
    height: 6vh;
    display: flex;
    flex-direction: row;
    margin-top:5%;
    outline: none

`
let Buttons = styled.button`
    width: 10vw;
    height: 6vh;
    border: solid black;
    background: black;
    color: white;
    margin-top: 5%

`

class CreateReview extends Component {
    state = {
        review: {
            name: '',
            location: '',
            description: ''
        }
    }
    handleChange = (e) => {
        const newState = { ...this.state.review }
        newState[e.target.name] = e.target.value
        this.setState({ review: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const CreateReview = this.state.review
        axios.post('/api/reviews', CreateReview)
            .then((res) => {
                this.props.getAllReviews()
                this.props.toggleReviewForm()
            })
            console.log('worked')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Inputs type='text' placeholder='name' name='name' value={this.state.review.name} onChange={this.handleChange} />
                    <Inputs type='text' placeholder='location' name='location' value={this.state.review.location} onChange={this.handleChange} />
                    <Inputs type='text' placeholder='description' name='description' value={this.state.review.description} onChange={this.handleChange} />
                    <Buttons>What did you think?</Buttons>
                </form>
            </div>
        );
    }
}

export default CreateReview;