import "./main.css";
import { SideBar } from "./components/SideBar";
import { ProfileView } from "./pages/ProfileView";

export const Main = () => (
  <main className="container main">

    <SideBar />

    <div className="main-content">
    
      <ProfileView></ProfileView>

    </div>
  </main>
);
