import { useState } from "react"
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
    const [blogs, setBlogs] = useState([])
	const [newBlog, setNewBlog] = useState({ id: "", title: "", description: "" })

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
							blogs={blogs} 
							setBlogs={setBlogs}
							newBlog={newBlog}
							setNewBlog={setNewBlog}
                        />
                    }
                />
                <Route
                    path={"/blog/:blogId"}
                    element={
                        <Post 
                            posts={postsArr}
                            blogs={blogs}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}