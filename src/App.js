import { useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home, About, Posts, Post, Projects } from "./components/pages/Index"
import { Header } from "./components/partials/Index"

function App() {
	const postsArr = [
		{
			id: 1,
			title: "Monty Python Lorem Ipsum",
			description: `Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! Well, I didn't vote for you. Now, look here, my good man. Bring her forward!

			I'm not a witch. Well, Mercia's a temperate zone! She looks like one. He hasn't got shit all over him. What a strange person. Well, she turned me into a newt.
			
			Well, what do you want? I'm not a witch. Did you dress her up like this? Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.`,
		},
		{
			id: 2,
			title: "Star Wars Lorem Ipsum",
			description: `Obi-Wan is here. The Force is with him. In my experience, there is no such thing as luck. Don't act so surprised, Your Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened to the plans they sent you.

			All right. Well, take care of yourself, Han. I guess that's what you're best at, ain't it? Don't underestimate the Force. In my experience, there is no such thing as luck. In my experience, there is no such thing as luck.
			
			No! Alderaan is peaceful. We have no weapons. You can't possibly… He is here. Obi-Wan is here. The Force is with him. I have traced the Rebel spies to her. Now she is my only link to finding their secret base.`,
		},
		{
			id: 3,
			title: "Arrested Development Lorem Ipsum",
			description: `No, I did not kill Kitty. However, I am going to oblige and answer the nice officer's questions because I am an honest man with no secrets to hide. Well, what do you expect, mother? It's a hug, Michael. I'm hugging you.

			Well, what do you expect, mother? Really? Did nothing cancel? Marry me. As you may or may not know, Lindsay and I have hit a bit of a rough patch.
			
			Army had half a day. It's a hug, Michael. I'm hugging you. I'm afraid I just blue myself. I'm afraid I just blue myself. But I bought a yearbook ad from you, doesn't that mean anything anymore?`,
		},
	]

	const [blogs, setBlogs] = useState([])
	const [newBlog, setNewBlog] = useState({})

	// // === EVENT HANDLERS === //
	// handle form submission
	const handleSubmit = (e) => {
		e.preventDefault()
		setBlogs([...blogs,newBlog])
		setNewBlog({title:'',description:''})
	}
	// handle text change in form
	const handleTextChange = (e) => {
		// console.log("handle text change")
		// console.log(e.target.value, e.target.name)
		setNewBlog({...newBlog,[e.target.name]: e.target.value})
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route 
					path={"/"} 
					element={<Home />} />
				<Route 
					path={"/about"} 
					element={<About />} />
				<Route
					path={"/posts"}
					element={
						<Posts 
							posts={postsArr} 
							blogs={blogs} 
							setBlogs={setBlogs}
							newBlog={newBlog}
							handleSubmit={handleSubmit}
							handleTextChange={handleTextChange}
						/>} />
				<Route
					path={"/posts/:postId"}
					element={<Post />} />
				<Route 
					path={"/projects"} 
					element={<Projects />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
// Problems:
// change style of function to export default function () {} -- cause that's whats in the react docsand it's mroe efficient to type. the arrow function doesn't bind `this` or anything
// diff between jsx and js
// how to export multiple components from pages dir
// source ^ https://dev.to/cyishere/export-multiple-components-in-index-file-el3
// calling it a blog page is one thing, but building "blog" into the url doesn't make sense because the actual resource here would be "posts"
// solution ^ I'll call it the "blog" page anywhere the user can see it, except for the urls, which I'm gonna build out with a RESTful api in mind
// stretch goal: a button that gets lorem ipsum from an api

// import from react-router-dom
// set up routes
// make components/pages and components/partials
// make component files
// stub up components
// make an Index.js in components/pages
// export files there so import in App is cleaner
// see error in dev tools
// change file type to Index.jsx and errors go away

// make Header partial with navbar
// export header from a partials/Index.js

// blog posts next
// make array of post data in app and pass as props to Posts
// get lorem ipsum from http://fillerama.io/
// make Post component in pages
// design ui

// ... and then I made the posts render on the right url ...

// get ready to add state to app
// make component tree diagram
