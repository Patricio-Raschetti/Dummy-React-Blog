import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Testing Home Route</h1>} />
                <Route path="/" render={() => <h1>Test Test</h1>} />
                <Posts />
            </div>
        );
    };
};

export default Blog;