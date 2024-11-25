import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const handleLogin = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, "mohalemarothi@gmail.com", "1143828Wits");
            console.log("Logged in:", user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;
