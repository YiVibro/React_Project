import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./pages/About"
import Home from "./pages/Home"
import { BrowserRouter ,Routes,Route,Link} from 'react-router-dom';

function App()
{
  return(
  <BrowserRouter>
  <header>
    <Link to="/about">#VANLIFE</Link>
  <nav>
   <Link to="/">Home</Link>
   <Link to="/about">About</Link>
  </nav> 
  </header>
 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

