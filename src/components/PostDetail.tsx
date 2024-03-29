import React from "react";
import { Link } from "react-router-dom";

const PostDetail = () => {
    return (
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </div>
                <div className="post__profile-box">
                    <div className="post__profile"></div>
                    <div className="post__author-name">홍길동</div>
                    <div className="post__date">2024.02.27 화요일</div>
                </div>
            </div>
            <div className="post__title"></div>
            <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">
                    <Link to={`/posts/edit/1`}>수정</Link>
                </div>
            </div>
            <div className="post__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </div>
        </div>
    );
};

export default PostDetail;
