import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Route exact path="/" component={Header}/>
      <Route path="/about-me" component={AboutMe}/>
      <Route path="/services" component={Service}/>
      <Route path="/how-work" component={Header}/>
      <Route path="/portfolio" component={Header}/>
      <Route path="/contacts" component={Header}/>
    </HashRouter>
  );
}

export default App;
