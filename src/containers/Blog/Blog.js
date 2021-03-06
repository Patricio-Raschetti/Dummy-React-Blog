import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        auth: false,
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    exact
                                    activeClassName="my-link"
                                    activeStyle={{
                                        color: '#fa923f'
                                    }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#testing-hash',
                                    search: '?some-query-string=true'
                                }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.props.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    };
};

export default Blog;