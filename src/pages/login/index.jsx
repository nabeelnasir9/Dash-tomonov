import { useContext } from "react";
import { AuthContext } from "../../config/AuthContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, username, setUsername, password, setPassword } =
    useContext(AuthContext);
  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="main">
      <div className="form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
