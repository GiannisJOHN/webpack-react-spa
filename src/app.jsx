//image
import hiphop from "./assets/hiphop.jpg";
//css
import "./styles/index.css";
//data
import verbs from "./data/verbs.json";

function App() {
  return (
    <>
      <h1>Hi from WebPack!!</h1>
      <img src={hiphop} alt="" style={{ width: "800px" }} />
      <p>My first webpack app generates an html file.</p>
      <p>webPack server works</p>

      {verbs.map((row) => {
        return <p>{row.german}</p>;
      })}
    </>
  );
}

export default App;
