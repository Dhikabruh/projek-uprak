import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [followedUsers, setFollowedUsers] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);

  const toggleFollow = (id) => {
    if (followedUsers.includes(id)) {
      setFollowedUsers(
        followedUsers.filter((userId) => userId !== id)
      );
    } else {
      setFollowedUsers([...followedUsers, id]);
    }
  };
  
  const toggleLike = (id) => {
    if (likedUsers.includes(id)) {
      setLikedUsers(
        likedUsers.filter((userId) => userId !== id)
      );
    } else {
      setLikedUsers([...likedUsers, id]);
    }
  };
  
  return (
    <UserContext.Provider
      value={{ 
         followedUsers,
        toggleFollow,
        likedUsers,
        toggleLike,
       }}
    >
      {children}
    </UserContext.Provider>
  );
}