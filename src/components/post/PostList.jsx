"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import AddPostButton from "./AddPostButton"

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts")
        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching posts:", err)
        setError("Failed to load posts. Please try again later.")
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <div className="loading">Loading posts...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h1>Recent Posts</h1>
        <AddPostButton />
      </div>

      {posts.length === 0 ? (
        <div className="no-posts">
          <p>No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post._id} className="post-card">
              <div className="post-image">
                <img src={post.image_url || "/placeholder.svg"} alt="Post" />
              </div>
              <div className="post-content">
                <p className="post-excerpt">{post.content.substring(0, 100)}...</p>
                <div className="post-meta">
                  <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
                  <Link to={`/posts/${post._id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList

