import './App.css';

import { Blog, Hobbies, Footer, Header, Possibility, AboutMe, Projects } from "./containers";
import { CTA, Navbar } from "./components";

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
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
