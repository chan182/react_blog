import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Post Link</Link>
                </li>
                <li>
                    <Link to="/posts/:id">Post Detail</Link>
                </li>
                <li>
                    <Link to="/posts/edit/:id">Post Edit</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<h1>안녕하세요</h1>} />
                <Route path="/posts" element={<h1>Post List Page</h1>} />
                <Route path="/posts/:id" element={<h1>Post List Page</h1>} />
                <Route
                    path="/posts/edit/:id"
                    element={<h1>Post List Page</h1>}
                />
                <Route path="profile" element={<h1>프로필 페이지</h1>}></Route>
            </Routes>
        </>
    );
}

export default App;
