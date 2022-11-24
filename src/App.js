
import './App.css';
import Navbar from './components/Navbar';
// import Carousel from './Carousel';
import Hero from './Hero';
// import Footer from './Footer';
// import Footer2 from './Footer2';
// import Founder from './Founder';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="">
     

<BrowserRouter>
       <Navbar/>
       <Routes>
       
        <Route path='/' element={<Hero/>}/>
        

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        



       </Routes>
     
     
     </BrowserRouter>
     
    
    

    
     
    
    </div>
  );
}

export default App;
