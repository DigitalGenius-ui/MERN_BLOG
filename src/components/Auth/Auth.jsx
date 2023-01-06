import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    if (auth) {
      if (!login) return;
      try {
        navigate("/");
        const user = await axios.post("user/login", login);
        localStorage.setItem("auth", JSON.stringify(user.data));
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (!signUp) return;
        setAuth(true);
        const user = await axios.post("user/register", signUp);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container auth={auth}>
      <h1>{auth ? "Sign In" : "Sign Up"}</h1>
      {auth ? (
        // sign  in
        <Form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Full Name..."
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password..."
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button type="submit">Sign In</button>
        </Form>
      ) : (
        // sign up
        <Form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Full Name..."
            value={signUp.username}
            onChange={(e) => setSignUp({ ...signUp, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email..."
            value={signUp.email}
            onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password..."
            value={signUp.password}
            onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
          />
          <button type="submit">Sign Up</button>
        </Form>
      )}
      <p onClick={() => setAuth(!auth)}>
        {auth
          ? `If you already have an account, please Login here.`
          : ` "If you don't have an account yet, please Sign Up here.`}
      </p>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  background-color: #fff;
  width: 25rem;
  margin: ${(props) => (props.auth ? "4.8rem" : "2.7rem")} auto;
  padding: 1rem;

  h1 {
    text-align: center;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 1.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    padding-top: 1rem;
    text-align: center;

    &:hover {
      opacity: 0.7;
    }

    span {
      color: #0e0e59;
      font-weight: 600;
    }
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    outline: none;
  }

  button {
    padding: 1rem;
    width: 100%;
    cursor: pointer;
  }
`;
