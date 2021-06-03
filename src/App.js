import React from 'react';
import Home from './components/home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  React.useEffect(() => {
		AOS.init();
    document.title = "Tyler Degand"
	}, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
