import React, { Component } from 'react';
import axiosBlogInstance from '../../axiosBlogInstance';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    _isMounted;

    componentDidMount() {        // DidMount if we use the component as the first-level Route.
        this.loadData();
    };

    componentDidUpdate() {      // DidUpdate if we use the component inside an active Route for reacting to changes;
        this.loadData();
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    async loadData() {
        this._isMounted = true;
        if (this.props.match.params.id && (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id))) {
            const response = await axiosBlogInstance.get(`/posts/${this.props.match.params.id}`);
            if (this._isMounted) this.setState({ loadedPost: response.data });
        };
    };

    deletePostHandler = () => {
        axiosBlogInstance.delete(`/posts/${this.props.match.params.id}`)
            .then(response => console.log(response));
    };

    render() {
        let post = <p style={{ textAlign: 'center' }}>{this.props.match.params.id ? 'Loading...' : 'Please select a Post!'}</p>;
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