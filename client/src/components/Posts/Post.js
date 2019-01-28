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
    toggleEditPostForm = () => {
        this.setState({editFormVisible : !this.state.editFormVisible})
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
                <button onClick={this.toggleEditPostForm}>Edit Post</button>
            {this.state.editFormVisible ? 
                    <EditPost
                        getPost={this.getPost}
                        postId={this.state.post._id} 
                        toggleEditPostForm={this.toggleEditPostForm}
                    />
                :null}
                <div><button onClick={this.delete}>Delete Post</button></div>

            </div>
        );
    }
}

export default Post;