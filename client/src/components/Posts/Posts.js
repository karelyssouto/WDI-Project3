import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost';
import styled from 'styled-components'
import arepa from '../../images/arepaSymbol.png'


let PostHeader = styled.h1 `
    color: white;
    font-size: 5em;
    margin: 0 auto;
    padding: 3% 0 3% 10%;

`
let CreatePostContainer = styled.div `
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    padding-left: -5%;
    position:absolute;
    align-self:flex-end;
    background: black

`

let CreatePostButton = styled.button `
    width: 6vw;
    height: 7vh;
    background: transparent;
    color: rgba(255, 174, 82);
    border: none;
    outline: none;
    img{
        width: 5.5vw;
        height:7vh; 
    }
`

let PostSection = styled.div `
    background:black;
    width: 100vw;
    height: 90vh;
`

let PostsContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around
`

let PostImage = styled.img`
    width: 25vw;
    height: 35vh;

`

class Posts extends Component {
    state = {
        posts:[{}],
        PostFormVisible: false
    }
    componentDidMount(){
        this.getAllPosts()
    }
    getAllPosts = () => {
        axios.get('/api/posts')
        .then((res)=> this.setState({ posts: res.data}))
    }
    togglePostForm = () => {
        this.setState({PostFormVisible : !this.state.PostFormVisible})
    } 

    render() {
        return (
            <div>
            <PostSection>
                <PostHeader>Posts</PostHeader>

                <PostsContainer>
                {this.state.posts.map((post, i) => (
                    <div key={i}>
                        <Link className='link' to={`/posts/${post._id}`}>
                        <PostImage src={post.img} alt='post'/>
                        <h3>{post.description}</h3>
                        </Link>                 
                    </div>
                ))}
                </PostsContainer>

            </PostSection>
            <CreatePostContainer>
                <CreatePostButton onClick={this.togglePostForm}><img src={arepa} alt='arepa' /></CreatePostButton>
            </CreatePostContainer>
                {
            this.state.PostFormVisible ?
            <CreatePost
                getAllPosts={this.getAllPosts}
                togglePostForm={this.togglePostForm}
            /> : null
        }
        </div>
        );
    }
}

export default Posts;
