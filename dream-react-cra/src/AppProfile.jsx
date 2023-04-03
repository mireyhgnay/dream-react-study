import "./App.css";
import Profile from "./components/Profile";
import Person from "./components/Person";
import hinata from './images/hinata.jpeg';
import kenma from './images/kenma.jpeg';
import k from './images/k.jpeg';

function AppProfile() {
  return (
    <>
      <Person image={hinata} isNew={true} />
      <Profile image={hinata} name='Hinata' title='Animation Character' isNew={true} />
      <Profile image={kenma} name='Kenma' title='Animation Character' />
      <Profile image={k} name='K' title='Animation Character' />
    </>
  );
}

export default AppProfile;
