import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to='/posts'>posts</Link>
                <Link to='/reviews'>reviews</Link>
            </div>
        );
    }
}

export default HomePage;