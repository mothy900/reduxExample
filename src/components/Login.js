import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../Features/User";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            //action 을 입력한다.
            login({
              name: "yun",
              age: 32,
              email: "email@gmail.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(
            //action 을 입력한다.
            logout()
          );
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
