import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import AddProductForm from './components/product/AddProductForm';
import UpdateProductForm from './components/product/UpdateProductForm';
import ProductDetail from './components/product/ProductDetail';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Footer from './components/layout/Footer';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user,setUser}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/add" element={<AddProductForm />} />
          <Route path="/product/update/:id" element={<UpdateProductForm />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </UserContext.Provider>

  );
}

export default App;
