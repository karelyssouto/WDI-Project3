import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost';


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
                <h1>Posts</h1>
                <button onClick={this.togglePostForm}>Add a Post</button>
                {this.state.PostFormVisible ?
                 <CreatePost
                    getAllPosts={this.getAllPosts}
                    togglePostForm={this.togglePostForm}
                /> : null}
                {this.state.posts.map((post, i) => (
                    <div key={i}>
                        <Link to={`/posts/${post._id}`}>
                        <img src={post.img} alt='post'/>
                        <h3>{post.description}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
