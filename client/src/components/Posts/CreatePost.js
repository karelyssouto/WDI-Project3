import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


let FormContainer = styled.div `
    position:relative;
    display: flex;
    flex-direction:column;
    width:100vw;
    justify-content: center;
    input{
        outline: none;
        width: 20vw;
        height: 4vh;
        background: transparent;
        border: solid #EDD3A2;
        color: #EDD3A2
        
    }
    button{
        width: 5vw;
        height: 4.95vh;
        border:none;
        background: #EDD3A2
    }
`

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
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='image URL' name='img' value={this.state.post.image} onChange={this.handleChange} />
                    <input type='text' placeholder='description' name='description' value={this.state.post.description} onChange={this.handleChange} />
                    <button>Add</button>
                </form>
            </FormContainer>
        );
    }
}

export default CreatePost;