import MainScreen from './screens/main/MainScreen';
import AboutUs from './screens/about_us/about_us';
import Services from './screens/services/services';
import SystemIntegration from './screens/system_integration/system_integration';
import CompletedProjects from './screens/completed_projects/completed_projects';
import LettersRecommendation from './screens/letters_recommendation/letters_recommendation';
import IsoCertificates from './screens/iso_certificates/iso_certificates';
import Contact from './screens/contact/contact';




import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainScreen />
      <AboutUs />
      <Services />
      <SystemIntegration />
      <CompletedProjects />
      <LettersRecommendation />
      <IsoCertificates />
      <Contact />
    </div>
  );
}

export default App;
