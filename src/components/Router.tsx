import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostPage from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import Profile from "../pages/profile";
import LoginPage from "../pages/login";
import Signup from "../pages/signup";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/posts" element={<PostList />} />
			<Route path="/posts/:id" element={<PostPage />} />
			<Route path="/posts/new" element={<PostNew />} />
			<Route path="/posts/edit/:id" element={<PostEdit />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/profile" element={<LoginPage />} />
			<Route path="/profile" element={<Signup />} />
			<Route path="/*" element={<Navigate replace to="/" />} />
		</Routes>
	);
};

export default Router;
