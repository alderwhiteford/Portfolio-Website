import React from 'react'; 
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from 'react-router-dom'; 
import About from './pages/About/About'; 
import Photos from './pages/Photos/Photos'
import Projects from './pages/Projects/Projects'
import Work from './pages/Work/Work'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import UploadForm from './components/UploadForm/UploadForm';
import PhotoPlaces from './pages/Photos/PhotoPlaces/PhotoPlaces'
import PhotoPeople from './pages/Photos/PhotoPeople/PhotoPeople';
import PhotoConcerts from './pages/Photos/PhotoConcerts/PhotoConcerts';
import PhotoMiscellaneous from './pages/Photos/PhotoMiscellaneous/PhotoMiscellaneous';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route exact path="/work" element = { <Work />}/>
          <Route exact path="/projects" element = { <Projects />}/>
          <Route exact path="/photos" element = { <Photos />}/>
          <Route exact path="/about" element = { <About />}/>
          <Route exact path="/contact" element = { <Contact />}/>
          <Route exact path="/upload-photos" element = { <UploadForm /> }/>
          <Route exact path="/photos/people" element = { <PhotoPeople/> }/>
          <Route exact path="/photos/places" element = { <PhotoPlaces /> }/>
          <Route exact path="/photos/concerts" element = { <PhotoConcerts/> }/>
          <Route exact path="/photos/miscellaneous" element = { <PhotoMiscellaneous/> }/>
          <Route path="*" element={ <Navigate replace to="/about" /> } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
