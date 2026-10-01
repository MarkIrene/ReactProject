import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
    console.log(password);
  }

  return (
    <div className="FormSignIn">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1" className="emailLabel">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <small
            id="emailHelp"
            className="form-text text-muted"
            style={{ fontSize: "10px" }}
          >
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1" className="passwordLabel">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btnSignIn"
          style={{ backgroundColor: "#97c0b8", border: "none" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
