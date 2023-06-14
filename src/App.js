import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Maincontent from './components/Maincontent'

const App = () => {

  return (
    <div className='section-elements'>
      <Header />
      <Maincontent name = "Profile Summary"/><hr></hr>
      <Maincontent name = "Academic and Cocurricular Achievements"/><hr></hr>
      <Maincontent name = "Summer Internship Experience"/><hr></hr>
      <Maincontent name = "Work Experience"/><hr></hr>
      <Maincontent name = "Projects"/><hr></hr>
      <Maincontent name = "Certifications"/><hr></hr>
      <Maincontent name = "Leadership Positions"/><hr></hr>
      <Maincontent name = "Extracurricular"/><hr></hr>
      <Maincontent name = "Education"/>
      <Footer />
    </div>
  );
};

export default App;
