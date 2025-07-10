import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import "./App.css"

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<></>} />
          <Route path="/projects" element={<></>} />
          <Route path="/messages" element={<></>} />
          <Route path="/jobs" element={<></>} />
          <Route path="/settings" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/reports" element={<></>} />
          <Route path="/help" element={<></>} />
          <Route path="/home" element={<></>} />
        </Routes>
      </div>
    </div>
  );
}
