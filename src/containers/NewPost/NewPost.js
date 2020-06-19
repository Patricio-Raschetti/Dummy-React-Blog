import React, { Component } from 'react';
import axiosBlogInstance from '../../axiosBlogInstance';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Pato'
    };

    postDataHandler = async () => {
        const post = { ...this.state };
        const response = await axiosBlogInstance.post('/posts/', post);
        console.log(response);
    };

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Pato">Pato</option>
                    <option value="Anonymous">Anonymous</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    };
};

export default NewPost;