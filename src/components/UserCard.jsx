import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./UserCard.css";

export default function UserCard({ user }) {
  const {
    followedUsers,
    toggleFollow,
    likedUsers,
    toggleLike,
  } = useContext(UserContext);

  const isFollowed = followedUsers.includes(user.id);
  const isLiked = likedUsers.includes(user.id);

  return (
    <div className="card">
      <div className="avatar">
         {user.name.charAt(0)}
      </div>
      <h2>{user.name}</h2>

      <p>{user.email}</p>

      <div className="button-group">
        <button
          className="follow-btn"
          onClick={() => toggleFollow(user.id)}
        >
          {isFollowed ? "Following" : "Follow"}
        </button>

        <button
          className="like-btn"
          onClick={() => toggleLike(user.id)}
        >
          {isLiked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
}