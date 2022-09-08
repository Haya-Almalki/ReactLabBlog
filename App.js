import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddBlog from './pages/AddBlog';
import BlogInfo from './pages/BlogInfo';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path='/details/:id' element={<BlogInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
