import React, { Component } from 'react';
import axios from 'axios';
import CreateReview from './CreateReview';
import styled from 'styled-components'
import Contact from '../ContactSection/Contact';

let ReviewHeader = styled.h1`
    color: white;
    font-size: 5em;
    margin: 0 auto;
    padding: 3% 0 3% 10%;

`
let ReviewsContainer = styled.div `
    background: black;
    width: 100 vw;
    heigth: 50%;
    color: white;
    

`
let ReviewsDisplay = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    text-align: center
`
let Buttons = styled.button`
    width: 10vw;
    height: 6vh;
    border: solid black;
    background: rgb(204, 5, 18);
    color: white;
    margin-top: 5%

`
class Reviews extends Component {
    state = {
        reviews:[{}],
        reviewFormVisible: false
    }
    componentDidMount(){
        this.getAllReviews()
    }
    getAllReviews = () => {
        axios.get(`/api/reviews`)
        .then((res) => this.setState({reviews : res.data}))
    }
    toggleReviewForm = () => {
        this.setState({ reviewFormVisible : !this.state.reviewFormVisible})
    }
    delete = (id) => {
        axios.delete(`/api/reviews/${id}`).then(() =>
            this.props.history.goBack()
        )
    }
    render() {
        return (
            <div>
            <ReviewsContainer>
                <ReviewHeader>Reviews</ReviewHeader>
                <Buttons onClick={this.toggleReviewForm}> Add a Review!</Buttons>
                <ReviewsDisplay>
                {this.state.reviewFormVisible ?
                <CreateReview
                    getAllReviews={this.getAllReviews}
                    toggleReviewForm={this.toggleReviewForm}
                /> : null }
                {this.state.reviews.map((review, i) => (
                    <div key={i}>
                        
                        <h1>{review.description}</h1>
                        <h5>{review.location}</h5>
                        <h4>{review.name}</h4>
                        <button onClick={() => (this.delete(review._id))}>delete</button>
                    </div>
                ))}
                </ReviewsDisplay>
            </ReviewsContainer>
            <Contact />
            </div>

        );
    }
}

export default Reviews;