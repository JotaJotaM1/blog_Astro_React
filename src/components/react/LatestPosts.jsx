// src/components/react/LatestPosts.jsx
import React from 'react';

const LatestPosts = ({ posts }) => {
    return (
        <div className="latest-posts">
            {posts.map((post, index) => (
                <div key={index} className="post-card">
                    <h3>
                        <a href={post.url}>{post.frontmatter.title}</a>
                    </h3>
                    <p className="date">{new Date(post.frontmatter.date).toLocaleDateString()}</p>
                    <p>{post.frontmatter.description}</p>
                </div>
            ))}
        </div>
    );
};

export default LatestPosts;