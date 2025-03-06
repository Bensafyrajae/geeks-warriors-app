"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Auth.css"

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.password) newErrors.password = "Password is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await axios.post("http://localhost:3000/auth/login", formData);
      sessionStorage.setItem("token", response.data.token)
      sessionStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/")
    } catch (err) {
      setErrors({ submit: err.response?.data || "Login failed. Check your credentials." })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <button type="submit" className="btn-auth" disabled={isSubmitting || !formData.email || !formData.password}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
