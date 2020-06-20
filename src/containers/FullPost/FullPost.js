import React, { Component } from 'react';
import axiosBlogInstance from '../../axiosBlogInstance';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    _isMounted;

    async componentDidMount() {
        this._isMounted = true;
        if (this.props.match.params.id && (!this.state.loadedPost)) {
            const response = await axiosBlogInstance.get(`/posts/${this.props.match.params.id}`);
            if (this._isMounted) this.setState({ loadedPost: response.data });
        };
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    deletePostHandler = () => {
        axiosBlogInstance.delete(`/posts/${this.props.match.params.id}`)
            .then(response => console.log(response));
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        };
        return post;
    };
};

export default FullPost;