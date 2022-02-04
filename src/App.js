import React from "react";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route index element={<Chat />} />
          </Routes>
        </AppBody>
      </div>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
