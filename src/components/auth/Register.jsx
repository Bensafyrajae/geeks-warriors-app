"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Auth.css"

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.username) newErrors.username = "Username is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const { confirmPassword, ...userData } = formData
      await axios.post("http://localhost:3000/auth/register", userData)
      navigate("/login")
    } catch (err) {
      setErrors({ submit: err.response?.data || "Registration failed. Try again." })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>
        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Choose a username" />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn-auth" disabled={isSubmitting || !formData.username || !formData.email || !formData.password || formData.password !== formData.confirmPassword}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register
