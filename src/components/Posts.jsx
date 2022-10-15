import React, { useEffect } from "react";
import useStore from "../store/useStore";
import useFriendsPostsReactor from "../store/reactors/useFriendsPostsReactor";

const Posts = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const posts = useFriendsPostsReactor();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
