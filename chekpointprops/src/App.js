import Profile from "./profile/Profile";
import me from "./profile/me.jpg"



import './App.css';

function App() {
  return (
    <div className="App">
      <Profile fullName="Mouhamed Guemri" bio="reactjs student" profession="front end developer">
      <img src={me} alt="my pic" style={{width :"150px", height : "150px"}}/>
      </Profile>
     
    </div>
  );
}

export default App;
