import Head from './components/Head';
import { Route, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe";

function App() {
  return (      

    <div className="App">
      <Head />
      <Routes>
           <Route path="jaberse09.github.io/React-Portfolio" element={<AboutMe />} /> 
            {/* <Route exact path="/contactMe" component={Contact} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Resume" component={Resume} /> */}
        </Routes>
</div>
  );
}

export default App;
