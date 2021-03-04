import logo from './logo.svg';
import './App.css';
import picsrc from "./imageInSrc.jpg";

function App() {
  return (
  <div className="App">
    <div style={{border:"solid 1px black", maxWidth:'100vw'}}>
      <h1 class="last">Karray</h1>
      <img src={ picsrc } />
      <img src="/mageInPublic.jpg" />
      <video width="320" height="240" controls>
        <source src={"https://www.youtube.com/watch?v=InMcm5gqHUs"} type="video/mp4" />
      </video>
    </div>
  </div>
  );
}
export default App;
