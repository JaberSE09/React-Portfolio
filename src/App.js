import Head from './components/Head';
import { Route, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
function App() {
  return (      

    <div className="App">
      <Head />
      <Routes>
      <Route path="/" element={<AboutMe />} /> 
      <Route path="/contact" element={<ContactMe />} /> 
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="/resume" element={<Resume />} /> 
            {/*<Route exact path="/contactMe" component={Contact} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Resume" component={Resume} /> */}
        </Routes>

     <Footer />
</div>


  );
}

export default App;
