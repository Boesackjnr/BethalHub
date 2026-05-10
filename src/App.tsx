/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import BusinessDirectory from './pages/BusinessDirectory';
import CommunityNotices from './pages/CommunityNotices';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import TenderDetail from './pages/TenderDetail';

// App component
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/opportunities/:id" element={<TenderDetail />} />
          <Route path="/business-directory" element={<BusinessDirectory />} />
          <Route path="/community-notices" element={<CommunityNotices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}
