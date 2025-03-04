"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image_url: "",
    content: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`)
        setFormData({
          image_url: response.data.image_url,
          content: response.data.content,
        })
        setLoading(false)
      } catch (err) {
        console.error("Error fetching post:", err)
        setError("Failed to load post. Please try again later.")
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.image_url) newErrors.image_url = "Image URL is required"
    if (!formData.content) newErrors.content = "Content is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, formData)
      navigate(`/posts/${id}`)
    } catch (err) {
      console.error("Error updating post:", err)
      setErrors({ submit: "Failed to update post. Please try again." })
      setIsSubmitting(false)
    }
  }

  if (loading) return <div className="loading">Loading post...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="post-form-container">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            placeholder="Enter image URL"
            className={errors.image_url ? "error" : ""}
          />
          {errors.image_url && <div className="error-message">{errors.image_url}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows={10}
            className={errors.content ? "error" : ""}
          />
          {errors.content && <div className="error-message">{errors.content}</div>}
        </div>

        {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate(`/posts/${id}`)}
            className="btn btn-cancel"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Updating..." : "Update Post"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPost

