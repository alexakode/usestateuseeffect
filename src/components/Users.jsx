import { useState } from "react";
const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];
export default function listUsers() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    if (!username || !email) return;
    const newUser = { username, email };
    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <h2>Brukere</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} — {user.email}
          </li>
        ))}
      </ul>
      <h3>Legg til ny bruker</h3>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="epost"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>Legg til</button>
    </div>
  );
}
