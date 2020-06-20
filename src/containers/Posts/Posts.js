import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axiosBlogInstance from '../../axiosBlogInstance';
import './Posts.css';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        // selectedPost: null,
        // error: false
    };

    _isMounted;

    async componentDidMount() {
        this._isMounted = true;
        try {
            const response = this._isMounted ? await axiosBlogInstance.get('/posts') : null;
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'Pato' }));
            if (this._isMounted) this.setState({ posts: updatedPosts });
        } catch (error) {
            console.log(error);
            // this.setState({ error: true });
        };
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    selectPostHandler = id => {
        this.props.history.push('/posts/' + id);
        //this.props.history.push({ pathname: '/posts/' + id })
        // this.setState({ selectedPost: id });
    };

    render() {
        // let posts = <p style={{ textAlign: "center" }}>Couldn't fetch the post. Try again later!</p>
        // if (!this.state.error) { posts = this.state.posts.map(...)} and remove the 'let' keyword.
        let posts = this.state.posts.map(post => {
            return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={this.selectPostHandler.bind(this, post.id)}
                />
                // </Link>
            );
        });

        return (
            <>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.path + '/:id'} component={FullPost} />
            </>
        );
    };
};

export default Posts;