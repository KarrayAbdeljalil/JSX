// import './FULLNAME.js';
// import './ProfilePHOTO.js';
// import './ADDRESS.js';
// import './App.css';

import ADDRESS from "./components/PROFILE/ADDRESS";
import FullName from "./components/PROFILE/FULLNAME";
import ProfilePHOTO from "./components/PROFILE/ProfilePHOTO";
import "./App.css";
function App() {
  return (
    <div>
      <FullName />
      <ProfilePHOTO />
      <ADDRESS />
    </div>

  );
}
export default App;
