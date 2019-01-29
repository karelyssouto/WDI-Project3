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
                <h1>Reviews</h1>
                <button onClick={this.toggleReviewForm}> Add a Review!</button>
                {this.state.reviewFormVisible ?
                <CreateReview
                    getAllReviews={this.getAllReviews}
                    toggleReviewForm={this.toggleReviewForm}
                /> : null }
                {this.state.reviews.map((review, i) => (
                    <div key={i}>
                        <h1>{review.name}</h1>
                        <h6>{review.location}</h6>
                        <h3>{review.description}</h3>
                        <h1>{review._id}</h1>
                        <button onClick={() => (this.delete(review._id))}>delete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default Reviews;