import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

let Inputs = styled.input`
    border: none;
    background: black ;
    color: rgba(255, 174, 82);
    width: 35vw;
    height: 6vh;
    display: flex;
    flex-direction: column;
    margin-top:5%

`
let Buttons = styled.button`
    width: 10vw;
    height: 6vh;
    border: solid black;
    background: black;
    color: white;
    margin-top: 5%

`


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
                    <Inputs type='text' placeholder='Image URL' name='img' value={this.state.post.image} onChange={this.handleChange} />
                    <Inputs type='text' placeholder='Description' name='description' value={this.state.post.description} onChange={this.handleChange} />
                    <Buttons>Update</Buttons>
                </form>
            </div>
        );
    }
}

export default EditPost;