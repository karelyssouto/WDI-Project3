import React, { Component } from 'react';
import axios from 'axios'


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
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='image URL' name='img' value={this.state.review.image} onChange={this.handleChange} />
                    <input type='text' placeholder='location' name='location' value={this.state.review.location} onChange={this.handleChange} />
                    <input type='text' placeholder='description' name='description' value={this.state.review.description} onChange={this.handleChange} />
                    <button>Add your review!</button>
                </form>
            </div>
        );
    }
}

export default CreateReview;