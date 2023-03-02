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

import AlertPopup from './components/Alert/AlertPopup'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cart from "./components/cart/Cart"
import MyOrdersList from './components/order/MyOrdersList';

function App() {


  return (
    <Router>
      <Navbar />
      <AlertPopup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/add" element={<AddProductForm />} />
        <Route path="/product/update/:id" element={<UpdateProductForm />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/myorders" element={<MyOrdersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
