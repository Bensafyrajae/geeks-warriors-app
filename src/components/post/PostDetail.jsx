"use client"

import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import "./Posts.css"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comment, setComment] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const currentUser = JSON.parse(localStorage.getItem("user") || "{}")

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors du chargement du post")
      }

      const data = await response.json()
      setPost(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}/like`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors du like")
      }

      setPost((prev) => {
        const isLiked = prev.likes.includes(currentUser.id)
        return {
          ...prev,
          likes: isLiked ? prev.likes.filter((userId) => userId !== currentUser.id) : [...prev.likes, currentUser.id],
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce post?")) {
      return
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression")
      }

      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ content: comment }),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du commentaire")
      }

      const newComment = await response.json()

      setPost((prev) => ({
        ...prev,
        comments: [...prev.comments, newComment],
      }))

      setComment("")
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteComment = async (commentId) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce commentaire?")) {
      return
    }

    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}/comments/${commentId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression du commentaire")
      }

      setPost((prev) => ({
        ...prev,
        comments: prev.comments.filter((c) => c.id !== commentId),
      }))
    } catch (err) {
      console.error(err)
    }
  }

  if (loading) return <div className="loading">Chargement du post...</div>
  if (error) return <div className="error">{error}</div>
  if (!post) return <div className="error">Post non trouvé</div>

  return (
    <div className="post-detail-container">
      <Link to="/" className="back-link">
        ← Retour aux posts
      </Link>

      <div className="post-detail-card">
        <div className="post-header">
          <div>
            <h1 className="post-title">{post.title}</h1>
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
              <button onClick={handleDelete} className="btn btn-icon btn-danger">
                🗑️
              </button>
            </div>
          )}
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <div className="post-footer">
          <button className={`btn btn-icon ${post.likes.includes(currentUser.id) ? "liked" : ""}`} onClick={handleLike}>
            ❤️ <span>{post.likes.length} J'aime</span>
          </button>
          <div className="post-stats">💬 {post.comments.length} Commentaires</div>
        </div>
      </div>

      <div className="comments-section">
        <h2>Commentaires</h2>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            rows={3}
          />
          <button type="submit" className="btn btn-primary" disabled={!comment.trim()}>
            Commenter
          </button>
        </form>

        {post.comments.length === 0 ? (
          <div className="no-comments">Aucun commentaire pour le moment. Soyez le premier à commenter !</div>
        ) : (
          <div className="comments-list">
            {post.comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <div className="comment-author">
                    <div className="avatar">{comment.author.username.charAt(0).toUpperCase()}</div>
                    <div className="comment-meta">
                      <p className="author-name">{comment.author.username}</p>
                      <p className="comment-time">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: fr })}
                      </p>
                    </div>
                  </div>
                  {currentUser.id === comment.author.id && (
                    <button className="btn btn-icon btn-danger" onClick={() => handleDeleteComment(comment.id)}>
                      🗑️
                    </button>
                  )}
                </div>
                <p className="comment-content">{comment.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostDetail

