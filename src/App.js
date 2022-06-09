import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './sheard/Header/Header';
import Contuct from './pages/Contuct/Contuct';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contuct" element={<Contuct></Contuct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
