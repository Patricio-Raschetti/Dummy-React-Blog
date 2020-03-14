import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        error: false
    };

    async componentDidMount() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'Pato' }));
            this.setState({ posts: updatedPosts });
        } catch (error) {
            this.setState({ error: true });
        };
    };

    selectPostHandler = id => {
        this.setState({ selectedPost: id });
    };

    render() {
        let posts = <p style={{ textAlign: "center" }}>Couldn't fetch the post. Try again later!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={this.selectPostHandler.bind(this, post.id)}
                />
            });
        };

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;