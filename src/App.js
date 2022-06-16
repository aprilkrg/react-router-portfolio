import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import postsArr from './loremIpsumData'

import { Home, About, Projects, Blog } from './components/pages/Index'
import { Header } from './components/partials/Index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/about"} element={<About />}/>
        <Route path={"/projects"} element={<Projects />}/>
        <Route path={"/blog"} 
          element={
            <Blog 
              posts={postsArr}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
