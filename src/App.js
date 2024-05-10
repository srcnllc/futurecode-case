import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout/Layout';
import Home from './components/Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Pages/Contact/Contact';
import Blog from './components/Pages/Blog/Blog';
import BlogDetail from './components/Pages/BlogDetail/BlogDetail';


function App() {
  return (
    <Layout>
        <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/iletisim' element={<Contact/>}/>
          <Route path='/blog/:id'element={<BlogDetail />}/>
        </Routes>
      </Router>
  </Layout>
  );
}

export default App;
