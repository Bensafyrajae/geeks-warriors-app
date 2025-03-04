"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const PostForm = () => {
  const navigate = useNavigate()
  const [content, setContent] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!imageURL) newErrors.image_url = "Image URL is required"
    if (!content) newErrors.content = "Content is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const postData = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/posts", data)
      navigate(`/posts/${response.data._id}`)
    } catch (err) {
      console.error("Error creating post:", err)
      setErrors({ submit: "Failed to create post. Please try again." })
      setIsSubmitting(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    const data = {
      image_url: imageURL,
      content: content,
      user_id: "123",
      createdAt: "1234",
    }
    postData(data)

    console.log("Content:", content)
    console.log("Image URL:", imageURL)
  }

  return (
    <div className="post-form-container">
      <h1>Create New Post</h1>

      {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            id="image_url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter image URL"
            className={errors.image_url ? "error" : ""}
          />
          {errors.image_url && <div className="error-message">{errors.image_url}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post content here..."
            rows={6}
            className={errors.content ? "error" : ""}
          />
          {errors.content && <div className="error-message">{errors.content}</div>}
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate("/")} className="btn btn-cancel" disabled={isSubmitting}>
            Cancel
          </button>
          <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm

