import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route index element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  position: fixed;
  top: 40px;
  width: 100vw;
  display: flex;
  height: 100vh;
`;
