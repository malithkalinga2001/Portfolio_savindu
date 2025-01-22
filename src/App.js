import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Business } from "./components/Business";
import { Media } from "./components/Media";
import { Service } from './components/Service';
import { Blog } from './components/Blog';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Business />
      <Media />
      <Service />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
