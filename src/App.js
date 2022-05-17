import './App.css';
import Navbar from './layout/Navbar/Navbar'
import Header from './layout/Header/Header'
import Project from './layout/Projects/Projects'
import Clients from './layout/Clients/Clients'
import Gallery from './layout/Gallery/Gallery'
import AboutUs from './layout/AboutUs/AboutUs'
import Contact from './layout/ContactUS/Contact'
import Footer from './layout/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <Clients />
      <Gallery />
      <AboutUs />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
