import Email from './components/email';
import Layout from './components/layout';
import Nav from './components/nav';
import Social from './components/social';

function App() {
  return (
    <>
      <Nav />
      <Layout>
        <Social />
        <Email />
      </Layout>
    </>
  );
}

export default App;
