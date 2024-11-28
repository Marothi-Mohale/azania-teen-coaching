import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setStatus("Logged in successfully!");
    } catch (error) {
      setStatus("Error logging in. Please try again.");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setStatus("Account created successfully!");
    } catch (error) {
      setStatus("Error creating account. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default AuthForm;
