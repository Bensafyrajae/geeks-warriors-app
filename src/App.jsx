import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"

// Components

import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import PostList from "./components/post/PostList"
import PostDetail from "./components/post/PostDetail"
import PostForm from "./components/post/PostForm"
import LandingPage from "./paterns/hero"

// Composant pour les routes protégées
const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token")
  return isAuthenticated ? children : <Navigate to="/landing" />
}

// Composant pour les routes publiques (accessible uniquement si non connecté)
const PublicRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token")
  return !isAuthenticated ? children : <Navigate to="/dashboard" />
}

function App() {
  return (
    <Router>
        <Routes>
        {/* Landing Page (accessible à tous) */}
        <Route path="/" element={<LandingPage />} />

        {/* Routes publiques (uniquement si non connecté) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Routes protégées (nécessite authentification) */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                  <PostList />
                </main>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PrivateRoute>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                  <PostDetail />
                </main>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/new"
          element={
            <PrivateRoute>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                  <PostForm />
                </main>
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:id/edit"
          element={
            <PrivateRoute>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                  <PostForm />
                </main>
              </div>
            </PrivateRoute>
          }
        />

        {/* Route par défaut */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App

