import './main.css';
import { SideBar } from './components/SideBar';
import {  Outlet } from 'react-router-dom';
import "./main.css";

export const Main = () => (
  <main className="container main">
    <SideBar />
    <div className="main-content">
    <Outlet />
    </div>
  </main>
);
