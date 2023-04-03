import "./App.css";
import Profile from "./components/Profile";
import hinata from './images/hinata.jpeg';
import kenma from './images/kenma.jpeg';
import k from './images/k.jpeg';

function AppProfile() {
  return (
    <>
      <Profile image={hinata} name='Hinata' title='Animation Character' />
      <Profile image={kenma} name='Kenma' title='Animation Character' />
      <Profile image={k} name='K' title='Animation Character' />
    </>
  );
}

export default AppProfile;
