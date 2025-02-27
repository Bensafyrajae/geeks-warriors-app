import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LandingPage from './paterns/hero'
import React  from "react";
import DataList from "./components/DataList/DataList"
import Footer from './components/post/Footer'






function App() {
 
  return (
    <>
    
      <LandingPage/>
      
      <DataList  />
      <Footer />
       {/*<h1>Geeks Warriors Blog</h1>
      <CreatePost />
      <PostList /> */}
    </>
  )
}

export default App
