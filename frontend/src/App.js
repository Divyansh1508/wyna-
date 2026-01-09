import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import SeriesHandcrafted from "./pages/SeriesHandcrafted/SeriesHandcrafted";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import FirstVisitConfetti from "./components/FirstVisitConfetti/FirstVisitConfetti";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollProgress />
        <FirstVisitConfetti />
        <WhatsAppChat />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories/:slug" element={<Products />} />
            <Route path="/series/handcrafted" element={<SeriesHandcrafted />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
