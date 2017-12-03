import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = 'section hoverable post'> 
                <blockquote>
                    <h5 className = 'teal-text'> {this.props.post.title}</h5>
                </blockquote>
                <p> 
                    {this.props.post.body}
                </p>
            </div>
        );
    };
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;