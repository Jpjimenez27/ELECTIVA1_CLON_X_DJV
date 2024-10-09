import './main.css';
import { SideBar } from './components/SideBar';
import {TweetsList} from './pages/TweetsList';
import { ProfileView } from './pages/ProfileView';
import { ModalFollowers } from './pages/components/ModalFollowers';

export const Main = () => (
  <main className='container main'>
    <SideBar />
    <div className="main-content">
      <TweetsList />
      {/* <ProfileView></ProfileView>
      <ModalFollowers></ModalFollowers> */}
    </div>
  </main>
)
