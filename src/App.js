import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from "./pages/About";
import Facts from "./pages/Facts";
import Tfacts from './pages/Topfacts/Tfacts';
import Newfacts from "./pages/Newfacts";
//  naviage pages 
import Youtube from "./pages/Navigatepages/Youtube";
import Google from "./pages/Navigatepages/Google";
import Facebook from "./pages/Navigatepages/Facebook";
import Cookies from "./pages/Navigatepages/Cookies";
import Hacking from "./pages/Navigatepages/Hacking";
import Server from "./pages/Navigatepages/Server";

import Popular from "./pages/Popular";
import Footer from './components/Footer';
function App() {
  return (
     <div>
      <Router> 
      <Navbar /> 
      
     
      <Routes> 
      <Route path='/' element={<Hero />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/facts' element={<Facts />}/>
      <Route path='/top-facts907597532' element={<Tfacts/>}/>
      <Route path='/new0222-2492492' element={<Newfacts/>}/>
      <Route path='/popular' element={<Popular/>}/>
      {/*  other page routing */}
      <Route path='/youtube-related-facts9237-438' element={<Youtube />}/>
      <Route path='/google-related-facts037332' element={<Google />}/>
      <Route path='/facebook-related-facts380328203' element={<Facebook />}/>
      <Route path='/your-cookies-related-facts574523' element={<Cookies />}/>
      <Route path='/hacking-related-facts94u5-944523' element={<Hacking />}/>
      <Route path='/server-related-facts94u5-944523' element={<Server />}/>
      </Routes>
      {/* Footer */}
      <Footer />
      </Router>
     </div>
  );
}

export default App;
