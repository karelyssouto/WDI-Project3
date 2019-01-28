import React, { Component } from 'react';
import axios from 'axios'


class EditPost extends Component {
    state = {
        post: {
            img: '',
            description: ''
        }
    }
    handleChange = (e) => {
        const newState = { ...this.state.post }
        newState[e.target.name] = e.target.value
        this.setState({ post: newState })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const updatePost = this.state.post
        const postId = this.props.postId
        axios.patch(`/api/posts/${postId}`, updatePost)
            .then((res) => {
                this.props.getPost()
                this.props.toggleEditPostForm()
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='image URL' name='img' value={this.state.post.image} onChange={this.handleChange} />
                    <input type='text' placeholder='description' name='description' value={this.state.post.description} onChange={this.handleChange} />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}

export default EditPost;