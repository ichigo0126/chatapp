import React from 'react';
import Content from './Content';
// import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}
