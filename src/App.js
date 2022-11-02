import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Experience from './components/Experience';
import Explore from './components/Explore';
import Header from './components/Header';
import Headsets from './components/Headsets';
import NavMobile from './components/NavMobile';
import Tesimonial from './components/Tesimonial';
import Video from './components/Video';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [navMobile,setNavMobile] = useState(true);
  
  useEffect(() => {
    Aos.init({
      duration:2500,
      delay:400,
    })
  })
  
  return (
    <div className="relative overflow-hidden before:w-[600px]
           before:h-[200px] before:bg-circle 
            before:bg-no-repeat  before:absolute   before:lg-flex before:hidden ">
      <Header navMobile={navMobile} setNavMobile={setNavMobile}/>
      <Banner />
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-[250px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>

      <Experience />
      <Video />
      <Headsets />
      <Tesimonial />
      <Explore />
    </div>
  );
}

export default App;
