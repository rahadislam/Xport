import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './sheard/Header/Header';
import Contuct from './pages/Contuct/Contuct';
import Project1 from './pages/Allproject/Project1';
import Project2 from './pages/Allproject/Project2';
import Project3 from './pages/Allproject/Project3';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/project1" element={<Project1></Project1>}></Route>
        <Route path="/project2" element={<Project2></Project2>}></Route>
        <Route path="/project3" element={<Project3></Project3>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contuct" element={<Contuct></Contuct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
