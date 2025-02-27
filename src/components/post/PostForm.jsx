"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import "./Posts.css"

const PostForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(false)

  const isEditing = !!id

  useEffect(() => {
    if (isEditing) {
      fetchPost()
    }
  }, [isEditing])

  const fetchPost = async () => {
    try {
      setInitialLoading(true)
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erreur lors du chargement du post")
      }

      const data = await response.json()
      setTitle(data.title)
      setContent(data.content)
    } catch (err) {
      setError(err.message)
    } finally {
      setInitialLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!title.trim() || !content.trim()) {
      setError("Tous les champs sont obligatoires")
      return
    }

    try {
      setLoading(true)

      const url = isEditing ? `http://localhost:5000/api/posts/${id}` : "http://localhost:5000/api/posts"

      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, content }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la sauvegarde du post")
      }

      navigate(isEditing ? `/posts/${id}` : `/posts/${data.id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (initialLoading) return <div className="loading">Chargement du post...</div>

  return (
    <div className="post-form-container">
      <Link to="/" className="back-link">
        ← Retour aux posts
      </Link>

      <div className="post-form-card">
        <div className="post-form-header">
          <h1>{isEditing ? "Modifier le post" : "Créer un nouveau post"}</h1>
        </div>
        <div className="post-form-content">
          {error && (
            <div className="alert alert-error">
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label htmlFor="title">Titre</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre de votre post"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Contenu</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Contenu de votre post"
                rows={10}
                required
              />
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sauvegarde en cours..." : isEditing ? "Mettre à jour" : "Publier"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostForm

