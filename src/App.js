import './App.css';

import { Contact, Hobbies, Footer, Header, AboutMe, Projects } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <AboutMe/>
      <Projects/>
      <Hobbies/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
