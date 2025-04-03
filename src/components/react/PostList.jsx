// src/components/react/PostList.jsx
import React, { useState } from 'react';

const PostList = ({ posts }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = posts.filter(post =>
        post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="post-list">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {filteredPosts.length === 0 ? (
                <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
            ) : (
                filteredPosts.map((post, index) => (
                    <div key={index} className="post-item">
                        <h2>
                            <a href={post.url}>{post.frontmatter.title}</a>
                        </h2>
                        <p className="post-meta">
                            Por {post.frontmatter.author} • {new Date(post.frontmatter.date).toLocaleDateString()}
                        </p>
                        <p>{post.frontmatter.description}</p>
                        <a href={post.url} className="read-more">Leer más →</a>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostList;