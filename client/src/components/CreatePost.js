import React, { Component } from 'react';
import axios from 'axios'

class CreatePost extends Component {
    state = {
        post:{
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
        const createPost = this.state.post
        axios.post('/api/posts', createPost)
        .then((res) => {
            this.props.getAllPosts()
            this.props.togglePostForm()
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='image URL' name='img' value={this.state.post.image} onChange={this.handleChange} />
                    <input type='text' placeholder='description' name='description' value={this.state.post.description} onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default CreatePost;