import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';    // Using 'axios' identifier instead of 'axiosBlogInstance' or whatever more specific for not changing the code.
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
        // selectedPost: null,
        // error: false
    };

    async componentDidMount() {
        try {
            const response = await axios.get('/posts/');
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => ({ ...post, author: 'Pato' }));
            this.setState({ posts: updatedPosts });
        } catch (error) {
            console.log(error);
            // this.setState({ error: true });
        };
    };

    selectPostHandler = id => {
        this.setState({ selectedPost: id });
    };

    render() {
        // let posts = <p style={{ textAlign: "center" }}>Couldn't fetch the post. Try again later!</p>
        // if (!this.state.error) { posts = this.state.posts.map(...)} and remove the 'let' keyword.
        let posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={this.selectPostHandler.bind(this, post.id)}
            />
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    };
};

export default Posts;