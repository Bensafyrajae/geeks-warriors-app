import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

// Importation des composants
import LandingPage from "./paterns/hero";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import DataList from "./components/DataList/DataList";
import Footer from "./components/post/Footer";
import PostList from "./components/post/PostList";
import PostForm from "./components/post/PostForm";
import PostDetail from "./components/post/PostDetail";
import EditPost from "./components/post/EditPost";

function App() {
  return (
    <Router>
      <div className="app">
        {/* <LandingPage /> */}
        {/* <DataList /> */}
        <main className="container">
          <Routes>

            <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
            <Route path="/postList/" element={<PostList />} />
            <Route path="/posts/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
