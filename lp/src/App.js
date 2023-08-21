import MainScreen from './screens/main/MainScreen';
import AboutUs from './screens/about_us/about_us';
import Services from './screens/services/services';
import SystemIntegration from './screens/system_integration/system_integration';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainScreen />
      <AboutUs />
      <Services />
      <SystemIntegration />
    </div>
  );
}

export default App;
