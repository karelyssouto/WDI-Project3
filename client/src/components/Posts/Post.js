import React, { Component } from 'react';
import axios from 'axios'
import EditPost from './EditPost';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

let PostContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background: rgba(255, 174, 82);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center

`
let PostImage = styled.img`
    width: 45vw;
    height: 45vh;

`
let ButtonsContainer = styled.div `
    display:flex;
    width: 45vw;
    justify-content: space-around
`
let Buttons = styled.button `
    width: 10vw;
    height: 6vh;
    border: solid black;
    background: black;
    color: white
`
class Post extends Component {
    state = {
        post: {},
        editFormVisible: false
    }
    componentDidMount() {
        this.getPost()
    }
    getPost = () => {
        const postId = this.props.match.params.postId
        axios.get(`/api/posts/${postId}`)
            .then((res) => {
                this.setState({post : res.data})
            })
    }
    toggleEditPostForm = () => {
        this.setState({editFormVisible : !this.state.editFormVisible})
    }
    delete = () => {
        const postId = this.props.match.params.postId
        axios.delete(`/api/posts/${postId}`)
            .then(() => this.getPost)
    }
    render() {
        return (
            <PostContainer>
                <PostImage src={this.state.post.img} alt='post'/>
                <h3>{this.state.post.description}</h3>
                <ButtonsContainer>
                <Buttons onClick={this.toggleEditPostForm}>Edit Post</Buttons>

                    <Link to="/posts"> <Buttons onClick={this.delete}>Delete Post</Buttons></Link>
                </ButtonsContainer>
                {this.state.editFormVisible ?
                    <EditPost
                        getPost={this.getPost}
                        postId={this.state.post._id}
                        toggleEditPostForm={this.toggleEditPostForm}
                    />
                    : null}

            </PostContainer>
        );
    }
}

export default Post;