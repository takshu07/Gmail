import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header";
import Sidebar from "./sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
