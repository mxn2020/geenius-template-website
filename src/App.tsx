import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Your Website</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
        This is a blazing fast React + Tailwind website. Feel free to ask the AI agent to completely redesign this layout, add a contact form, and inject your brand identity!
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-white shadow-sm flex justify-between items-center fixed w-full top-0">
        <span className="font-bold text-xl text-indigo-600">Company.</span>
        <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
      </nav>
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
