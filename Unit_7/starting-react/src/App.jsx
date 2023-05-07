
import './App.css';

// Importing the Header component, "from" keyword is used to bring it/ref the file path
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import Employees from './components/employeeInformation/Employees';

function App() {
  return (
    <div className="App">
    <Header />
    <AboutMe />
    <Employees/>
    <Footer />
    </div>
  );
}

export default App;
