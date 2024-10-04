import './main.css';
import { SideBar } from './components/SideBar';
import {TweetsList} from './pages/TweetsList';

export const Main = () => (
  <main className='container main'>
    <SideBar />
    <div className="main-content">
      <TweetsList />
    </div>
  </main>
)
