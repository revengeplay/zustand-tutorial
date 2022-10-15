import { useEffect } from "react";
import useStore from "../useStore";

const useFriendsPostsReactor = () => {
  const friends = useStore((state) => state.friend);
  const posts = useStore((state) => state.posts);
  const postsFromFriends = useStore((state) => state.postsFromFriends);
  const filterPostsByFriends = useStore((state) => state.filterPostsByFriends);

  useEffect(() => {
    filterPostsByFriends();
  }, [filterPostsByFriends, friends, posts]);
  return postsFromFriends;
};

export default useFriendsPostsReactor;
