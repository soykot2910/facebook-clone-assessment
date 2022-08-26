import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import CreateRoom from "./CreateRoom";
import Story from "./Story";
import { allPosts } from "../utils/posts";
import Post from "./Post";
import axios from "axios";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5`)
      .then((resp) => {
        // console.log(resp.data);
        setPosts(allPosts);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const handleComment = (user, postId) => {
    if (comment.trim() === "") {
      alert("Please enter comment.");
    } else {
      const postComment = {
        text: comment,
        created_at: "22 July 2022",
        user: user,
      };

      const newPosts = posts.map((post, i) => {
        if (post.id === postId) {
          post.comments.push(postComment);
        }
        return post;
      });

      setPosts(newPosts);
      setComment("");
    }
  };

  const handleLike = (post) => {
    // console.log(post);
    const newPosts = posts.map((p, i) => {
      if (p.id === post.id) {
        p.liked = !p.liked;
      }
      return p;
    });

    setPosts(newPosts);
  };
  return (
    <>
      <Story />
      <CreatePost />
      <CreateRoom />
      <div className="all-posts">
        {allPosts.map((post, i) => (
          <Post
            key={i}
            post={post}
            handleComment={handleComment}
            comment={comment}
            setComment={setComment}
            handleLike={handleLike}
          />
        ))}
      </div>
    </>
  );
};

export default NewsFeed;
