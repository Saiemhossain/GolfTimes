/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SingleBlogPage from './components/Blog/SingleBlogPage';
import Context from './context/Context';
import CheckOut from './pages/CheckOut';
import ThankYou from './pages/ThankYou';



function App() {
  
  
  return (
    <>
      <Context>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/thank-you'  element={<ThankYou/>} />
        </Routes>
        <Footer />
      </Context>
    </>
  );
}

export default App
