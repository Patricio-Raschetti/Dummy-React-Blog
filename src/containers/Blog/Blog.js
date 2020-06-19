import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';

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
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-link"
                                    activeStyle={{
                                        color: '#fa923f'
                                    }}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#testing-hash',
                                    search: '?some-query-string=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*                 <Route path="/" exact render={() => <h1>Testing Home Route</h1>} />
                <Route path="/" render={() => <h1>Test Test</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    };
};

export default Blog;