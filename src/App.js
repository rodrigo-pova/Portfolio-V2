import { useState } from 'react';
import Email from './components/email';
import Layout from './components/layout';
import Nav from './components/nav';
import About from './components/sections/about';
import Hero from './components/sections/hero';
import Social from './components/social';
import MenuContext from './context/menuContext';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <MenuContext.Provider value={[menuIsOpen, setMenuIsOpen]}>
      <Nav />
      <Layout>
        <Social />
        <Email />

        <Hero />
        <About />
      </Layout>
    </MenuContext.Provider>
  );
}

export default App;
