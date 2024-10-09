import { ProfileView } from "./ProfileView";
import { Sidebar } from "./Sidebar"
import   './main.css';



export const Profile = () => {
  return (
    <>
      <main className='container main'>
        
        <Sidebar/>
        <ProfileView/>
        
        
      </main>

    </>


  )
}

