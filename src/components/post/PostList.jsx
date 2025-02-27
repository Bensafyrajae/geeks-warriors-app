"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Posts.css"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des posts")
      }

      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${postId}/like`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors du like")
      }

      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            const isLiked = post.likes.includes(currentUser.id)
            return {
              ...post,
              likes: isLiked ? post.likes.filter((id) => id !== currentUser.id) : [...post.likes, currentUser.id],
            }
          }
          return post
        }),
      )
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (postId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce post?")) {
      return
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression")
      }

      setPosts(posts.filter((post) => post.id !== postId))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="loading">Chargement des posts...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="posts-container">
      <div className="posts-header">
        <h1>Publications récentes</h1>
        <Link to="/posts/new" className="btn btn-primary">
          <span className="icon">+</span> Nouveau post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="no-posts">Aucun post pour le moment. Soyez le premier à publier !</div>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-meta">
                    Par {post.author.username} •{" "}
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: fr })}
                  </p>
                </div>
                {currentUser.id === post.author.id && (
                  <div className="post-actions">
                    <Link to={`/posts/${post.id}/edit`} className="btn btn-icon">
                      ✏️
                    </Link>
                    <button onClick={() => handleDelete(post.id)} className="btn btn-icon btn-danger">
                      🗑️
                    </button>
                  </div>
                )}
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-footer">
                <div className="post-interactions">
                  <button
                    className={`btn btn-icon ${post.likes.includes(currentUser.id) ? "liked" : ""}`}
                    onClick={() => handleLike(post.id)}
                  >
                    ❤️ <span>{post.likes.length}</span>
                  </button>
                  <Link to={`/posts/${post.id}`} className="btn btn-icon">
                    💬 <span>{post.comments.length}</span>
                  </Link>
                </div>
                <Link to={`/posts/${post.id}`} className="btn btn-link">
                  Voir plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostList

