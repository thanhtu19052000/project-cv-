import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { authApi } from "./API/authApi";

function App() {
  useEffect(() => {
    const callApi = async () => {
      const ApiRegis = await authApi.Register({
        username: "dothanhtu123",
        email: "thanhtu19052000@gmail.com",
        password: "123123",
      });
      console.log(ApiRegis);
    };
    callApi();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
