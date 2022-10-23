
import './App.css';
import Navbar from './Navbar';
// import Carousel from './Carousel';
import Hero from './Hero';
// import Footer from './Footer';
// import Footer2 from './Footer2';
// import Founder from './Founder';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="">
     

<BrowserRouter>
       
       <Routes>
       
        <Route path='/' element={<Hero/>}/>
        

        <Route path='/about' element={<About/>}/>




       </Routes>
     
     
     </BrowserRouter>
     
    
    

    
     
    
    </div>
  );
}

export default App;
