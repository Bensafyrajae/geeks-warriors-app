"use client"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { formatDate } from "../../util/helpers"

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`)
        setPost(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("Failed to load post. Please try again later.")
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:3000/posts/${id}`)
        navigate("/")
      } catch (err) {
        console.error("Error deleting post:", err)
        alert("Failed to delete post. Please try again.")
      }
    }
  }

  if (loading) return <div className="loading">Loading post...</div>
  if (error) return <div className="error">{error}</div>
  if (!post) return <div className="not-found">Post not found</div>

  return (
    <div className="post-detail">
      <div className="post-header">
        <div className="post-meta">
          <span className="post-date">{formatDate(post.createdAt)}</span>
        </div>
        <div className="post-actions">
          <Link to={`/posts/${id}/edit`} className="btn btn-edit">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-delete">
            Delete
          </button>
        </div>
      </div>
      <div className="post-image-container">
        <img src={post.image_url || "/placeholder.svg"} alt="Post" className="post-image" />
      </div>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-navigation">
        <Link to="/postList/" className="btn btn-back">
          Back to Posts
        </Link>
      </div>
    </div>
  )
}

export default PostDetail

