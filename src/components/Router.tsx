import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PostsPage from "../pages/posts";
import PostDetailPage from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import ProfilePage from "../pages/profile";
import LoginPage from "../pages/login";
import Signup from "../pages/signup";
import PracPage from "pages/prac";
import { useState } from "react";
const Router = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	return (
		<Routes>
			{isAuthenticated ? (
				<>
					<Route path="/" element={<Home />} />
					<Route path="/posts" element={<PostsPage />} />
					<Route path="/posts/:id" element={<PostDetailPage />} />
					<Route path="/posts/new" element={<PostNew />} />
					<Route path="/posts/edit/:id" element={<PostEdit />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/prac" element={<PracPage />} />
					<Route path="/*" element={<Navigate replace to="/" />} />
				</>
			) : (
				<>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/*" element={<LoginPage />} />
				</>
			)}
		</Routes>
	);
};

export default Router;
