import { useState } from "react";
import "./App.css";
import PostOptionsMenu from "./UI-UX/PostOptionsMenu/PostOptionsMenu";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import { users } from "./components/userData";
// !Login Page
import LoginPage from "./components/LoginPage/LoginPage";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import MessagesPage from "./components/MessagesPage/MessagesPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageFunction />} />
        <Route path="/home" element={<MainPageFunction />} />
        <Route path="/profile-details/:id" element={<ProfilePageFunction />} />
        <Route path="/explore" element={<ExplorePageFunction />} />
        <Route path="/messages" element={<MessagesPageFunction />} />
      </Routes>
    </BrowserRouter>
  );
}
function LoginPageFunction() {
  return (
    <>
      <LoginPage />
    </>
  );
}
function MainPageFunction() {
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  return (
    <>
      <PostOptionsMenu
        showOptionsMenu={showOptionsMenu}
        setShowOptionsMenu={setShowOptionsMenu}
      />
      <Navbar />
      <MainPage setShowOptionsMenu={setShowOptionsMenu} />
    </>
  );
}

function ProfilePageFunction() {
  let { id } = useParams(); // useParams'dan gelen id'yi doğrudan alalım.
  let profile = users.find((p) => p.id === Number(id));
  return (
    <>
      <Navbar />
      {profile ? (
        <ProfilePage profile={profile} />
      ) : (
        <h1 className="font-bold ml-96 text-2xl pt-24">Sayfa bulunamadı</h1>
      )}
    </>
  );
}

function ExplorePageFunction() {
  return (
    <>
      <Navbar />
      <ExplorePage />
    </>
  );
}


function MessagesPageFunction() {
  return (
    <>
      <Navbar />
      <MessagesPage />
    </>
  );
}
export default App;
