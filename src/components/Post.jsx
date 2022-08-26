import React from "react";
import LikeBlueIcon from "../assets/img/home/like-blue.png";
import CommentIcon from "../assets/img/home/comment.png";
import ShareIcon from "../assets/img/home/share.png";
import LikeIcon from "../assets/img/home/like.png";

const Post = ({ post, handleComment,userDetails, comment, setComment, handleLike }) => (
  <div className="single-posts">
    <div className="header">
      <div className="left">
        <img src={post.user.profile_pic} alt="" className="post-user-img" />
        <div className="aut-details">
          <p className="name">{post.user.name}</p>
          <a href="#?" className="time">
            {post.posted_on}
          </a>
        </div>
      </div>
      <div className="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-dots"
          width={44}
          height={44}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#e4e6eb"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx={5} cy={12} r={1} />
          <circle cx={12} cy={12} r={1} />
          <circle cx={19} cy={12} r={1} />
        </svg>
      </div>
    </div>
    <div className="main-img">
      <img src={post.post_image} alt="" className="img-fluid" />
    </div>
    <div className="bottom">
      <div className="reactions">
        <div className="left">
          <img
            alt="lll"
            className=""
            height={18}
            role="presentation"
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
            width={18}
            style={{ userSelect: "auto" }}
          />
          <span className="">
            {post.liked ? "You and" : ""} {post.likes}{" "}
            {post.liked ? "others" : ""}
          </span>
        </div>
        <div className="right">
          <span className="">{post.comments.length} Comments</span>
          <span className="share">{post.share} Shares</span>
        </div>
      </div>
      <div className="line-brk"></div>
      <div className="l-c-s">
        <div className="like" onClick={() => handleLike(post)}>
          {post.liked ? (
            <img src={LikeBlueIcon} alt="" />
          ) : (
            <img src={LikeIcon} alt="" />
          )}
          <span className={post.liked ? "liked" : ""}>
            {post.liked ? "Like" : "like"}
          </span>
        </div>
        <div className="comment">
          <img src={CommentIcon} alt="" />
          <span className="comment-text">Comment</span>
        </div>
        <div className="share">
          <img src={ShareIcon} alt="" />
          <span className="share-text">Send</span>
        </div>
      </div>
      <div className="line-brk"></div>
      <div className="comment-section">
        {post.comments.length !== 0 && (
          <div className="all-comments">
            {post.comments.map((comment, i) => (
              <div className="single" key={i}>
                <img src={comment.user.profile_pic} alt="" />
                <div className="data">
                  <p className="author">{comment.user.name}</p>
                  <p className="main-c">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="comment-inp">
          <img src={userDetails.profile_pic} alt="" />
          <form
            onSubmit={(e) => {
                handleComment(userDetails, post.id);
              e.preventDefault();
            }}
            style={{ width: "100%" }}
          >
            <input
              type="text"
              placeholder="Write a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Post;
