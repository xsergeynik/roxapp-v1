import "./App.css";
import { Footer } from "./Footer";


const user = {userAge : 58};
const App = () => (
  <div className="App">
		<h1>Hello World {user.userAge}</h1>
		<Footer copyright="C"/>
  </div>
);

export default App;
