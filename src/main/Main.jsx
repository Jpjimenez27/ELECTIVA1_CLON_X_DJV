import   './main.css';
import { Sidebar } from './Sidebar';
import { Tweets } from './Tweets';


export const Main = () => {
  return (
    <main className='container main'>
      
      <Sidebar/>
      <Tweets/>
      
    </main>
  )
}
