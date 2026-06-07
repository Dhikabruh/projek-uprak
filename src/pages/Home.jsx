import { useEffect, useRef, useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="🔍 Cari user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="card-container">
  {filteredUsers.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
</div>
    </div>
  );
} 