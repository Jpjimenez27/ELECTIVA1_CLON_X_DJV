import './main.css';
import { SideBar } from './components/SideBar';
import { TweetsList } from './pages/TweetsList';
import { ProfileView } from './pages/ProfileView';
import { ModalFollowers } from './pages/components/ModalFollowers';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import "./main.css";


export const Main = () => (
  <main className="container main">

    <SideBar />

    <div className="main-content">
    <Outlet />

    </div>
  </main>
);
