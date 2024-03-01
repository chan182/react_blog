import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <PostList hasNavigation={true} />
            <Footer />
        </div>
    );
};

export default Home;
