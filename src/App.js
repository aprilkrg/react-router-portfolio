import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import { postsArr } from './loremIpsumData'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Post from './components/pages/Post';
import Header from './components/partials/Header'

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path={"/"}
                    element={<Home />}
                />
                <Route
                    path={"/about"}
                    element={<About />}
                />
                <Route
                    path={"/projects"}
                    element={<Projects />}
                />
                <Route
                    path={"/blog"}
                    element={
                        <Blog 
                            posts={postsArr}
                        />
                    }
                />
                <Route
                    path={"/blog/:blogId"}
                    element={
                        <Post 
                            posts={postsArr}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}