import React from "react";
import useStore from "../store/useStore";

const Friends = () => {
  const friends = useStore((state) => state.friends);
  const removeUserFromFriends = useStore(
    (state) => state.removeUserFromFriends
  );
  return (
    <div>
      <h5>Friends ({friends.length})</h5>
      <div className="">
        {friends.map((friend) => (
          <span key={friend.id}>
            {friend.name}
            <button
              onClick={() => removeUserFromFriends(friend.id)}
              className="w-7 bg-red-500"
            >
              삭제
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Friends;
