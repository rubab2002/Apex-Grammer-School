// import React from 'react'
// import Hero from './Components/Hero/Hero'
// import Academics from './Components/Academics/Academics'
// import Faculty from './Components/Faculty/Faculty'
// import CampusLife from './Components/CampusLife/CampusLife'
// import Enquiry from './Components/Enquiry/Enquiry'
// import Footer from './Components/Footer/Footer'
// import Navbar from './Components/Navbar/Navbar'



// import Navbar from './Components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import Academics from './components/Academics/Academics'
// import Faculty from './components/Faculty/Faculty'
// import CampusLife from './components/CampusLife/CampusLife'
// import Enquiry from './components/Enquiry/Enquiry'
// import Footer from './components/Footer/Footer'





// function App() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar/>
//       <Hero />
//       <Academics />
//       <Faculty />
//       <CampusLife />
//       <Enquiry />
//       <Footer />
//     </div>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Academics from './Components/Academics/Academics';
import Faculty from './Components/Faculty/Faculty';
import CampusLife from './Components/CampusLife/CampusLife';
import Enquiry from './Components/Enquiry/Enquiry';
import Footer from './Components/Footer/Footer';
import AdmissionForm from './Components/AdmissionForm/AdmissionForm';




// Home Page Component (Jo saara data ek saath dikhaye)
const Home = () => (
  <>
    <Hero />
    <Academics />
    <Faculty />
    <CampusLife />
    <Enquiry />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* Jab link "/" ho toh Home dikhao */}
          <Route path="/" element={<Home />} />
          
          {/* Jab alag pages par click ho */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/gallery" element={<CampusLife />} />
          <Route path="/contact" element={<Enquiry />} />
          <Route path="/apply" element={<AdmissionForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;