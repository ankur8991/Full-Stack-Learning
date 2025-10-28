import React from 'react'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Card title = "MERN" description = "MERN is a full stack web development Technology" />
      <Card title = "ReactJS" description = "ReactJS is a popular front-end library" />
      <Card title="Rust" description="Rust is a modern systems programming language focused on performance, safety, and concurrency — great for backend and system-level work."/>
      <Card title="Spring Boot" description="Spring Boot is a powerful Java framework for building production-ready, enterprise-level backend applications."/>      <Card title = "ReactJS" description = "ReactJS is a popular front-end library" />
      <Card title="Next.js" description="Next.js is a React-based framework for building fast, SEO-optimized, and scalable web apps with server-side rendering."/>
      <Card title="Django" description="Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design."/>
      <Card title="Flutter" description="Flutter is a UI toolkit by Google for building beautiful, natively compiled mobile, web, and desktop apps from a single codebase."/>

      <Footer />
    </div>
  )
}

export default App
