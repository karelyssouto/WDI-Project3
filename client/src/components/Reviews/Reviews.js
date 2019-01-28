import React, { Component } from 'react';
import axios from 'axios';
import CreateReview from './CreateReview';

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
        .then((res) => this.setState({review : res.data}))
    }
    toggleReviewForm = () => {
        this.setState({ reviewFormVisible : !this.reviewFormVisible})
    }
    render() {
        return (
            <div>
                <h1>Reviews</h1>
                <button onClick={this.toggleReviewForm}> Add a Review!</button>
                {this.state.reviewFormVisible ?
                <CreateReview
                    getAllPosts={this.getAllReviews}
                    toggleReviewForm={this.toggleReviewForm}
                /> : null }
            </div>
        );
    }
}

export default Reviews;