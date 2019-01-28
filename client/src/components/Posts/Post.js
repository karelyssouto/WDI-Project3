import React, { Component } from 'react';
import axios from 'axios'
import EditPost from './EditPost';

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
    delete = () => {
        const postId = this.props.match.params.postId
        axios.delete(`/api/posts/${postId}`)
            .then(() => this.props.history.goBack())
    }
    render() {
        return (
            <div>
                <img src={this.state.post.img} alt='post'/>
            <h3>{this.state.post.description}</h3>
            <div><button onClick={this.delete}>Delete Post</button></div>
            <EditPost
                getPost={this.getPost}
            />
            </div>
        );
    }
}

export default Post;