import React from 'react';
import Home from './components/home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactGA from 'react-ga';



const App = () => {

  ReactGA.initialize('UA-175982896-1'); // add your tracking id here.
  ReactGA.pageview(window.location.pathname + window.location.search);

  React.useEffect(() => {
		AOS.init();
	}, []);


  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
